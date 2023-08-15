import { memo, useEffect, useRef, useState } from "react";
import { Address, Coordinate } from "../types/autogen";

export interface MapLocation {
  id: string;
  address?: Address;
  geocodedCoordinate?: Coordinate;
}

export interface AppleMapProps {
  locations?: {
    id: string;
    address?: Address;
    geocodedCoordinate?: Coordinate;
  }[];
  center?: {
    latitude: number;
    longitude: number;
  };
  mapContainerClassname?: string;
  onLocationSelect?: (location: MapLocation) => void;
}

const AppleMap = ({ locations, center, onLocationSelect }: AppleMapProps) => {
  const [map, setMap] = useState<any>();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    script.dataset.callback = "initMapKit";
    script.dataset.libraries = "map,annotations,services";
    // NOTE: This token will expire in one year and need to be replaced
    script.dataset.initialToken = import.meta.env.YEXT_PUBLIC_APPLE_MAPS_TOKEN;

    document.body.appendChild(script);

    const setupMapKitJs = async () => {
      if (!window.mapkit || window.mapkit.loadedLibraries.length === 0) {
        await new Promise((resolve) => {
          window.initMapKit = resolve;
        });
        delete window.initMapKit;
      }

      const jwt = window.mapkit.init({
        authorizationCallback: (done: any) => {
          done(jwt);
        },
      });
    };

    const main = async () => {
      await setupMapKitJs();
      const map = new window.mapkit.Map(mapContainerRef.current);
      setMap(map);
    };

    main();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (map && mapContainerRef.current && window.mapkit) {
      map.removeAnnotations(map.annotations);
      if (locations && locations.length > 0) {
        const markers = locations?.map((location, idx) => {
          const marker = new window.mapkit.MarkerAnnotation(
            new window.mapkit.Coordinate(
              location.geocodedCoordinate?.latitude,
              location.geocodedCoordinate?.longitude
            ),
            {
              glyphText: "●",
              glyphColor: "#ffffff",
              color: "#4F6A4E",
            }
          );

          marker.addEventListener("select", handleLocationSelect, location);

          return marker;
        });

        map.showItems(markers);

        if (!center) {
          const initialCenter = findCenter();
          map.setCenterAnimated(
            new window.mapkit.Coordinate(
              initialCenter.latitude,
              initialCenter.longitude
            ),
            false
          );
        }
      }
    }
  }),
    [locations];

  const findCenter = () => {
    if (locations && locations.length > 0) {
      const minLat = Math.min(
        ...locations.map((location) => location.geocodedCoordinate?.latitude)
      );
      const maxLat = Math.max(
        ...locations.map((location) => location.geocodedCoordinate?.latitude)
      );
      const minLng = Math.min(
        ...locations.map((location) => location.geocodedCoordinate?.longitude)
      );
      const maxLng = Math.max(
        ...locations.map((location) => location.geocodedCoordinate?.longitude)
      );

      return {
        latitude: (minLat + maxLat) / 2,
        longitude: (minLng + maxLng) / 2,
      };
    }
  };

  // useEffect(() => {
  //   if (center && map) {
  //     map.setCenterAnimated(
  //       new window.mapkit.Coordinate(center.latitude, center.longitude)
  //     );
  //   }
  // }, [center]);

  const handleLocationSelect = (r: any) => {
    const location = r.target._listeners.select[0].thisObject;
    if (location) {
      onLocationSelect?.(location);
    }
  };

  return <div ref={mapContainerRef} className={"w-full h-full"} />;
};

const AppleMapMemoized = memo(AppleMap);

export default AppleMapMemoized;
