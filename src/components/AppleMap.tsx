import { useEffect, useRef, useState } from "react";
import { Address, Coordinate } from "../types/autogen";
import { useLocatorContext } from "./DoctorLocator";

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

  const { selectedId, setSelectedId } = useLocatorContext();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    script.dataset.callback = "initMapKit";
    script.dataset.libraries = "map,annotations,services";
    // NOTE: This token will expire in one year and need to be replaced
    script.dataset.initialToken = YEXT_PUBLIC_APPLE_MAPS_TOKEN;

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
    renderMarkers();
  }),
    [locations];

  useEffect(() => {
    if (center && map) {
      map.setCenterAnimated(
        new window.mapkit.Coordinate(center.latitude, center.longitude)
      );
    }
  }, [center]);

  const renderMarkers = () => {
    if (mapContainerRef.current && window.mapkit) {
      if (map && locations && locations.length > 0) {
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

          if (idx === 0) {
            marker.selected = true;
          }

          return marker;
        });
        map.showItems(markers);
        map.setCenterAnimated(
          new window.mapkit.Coordinate(
            locations[0].geocodedCoordinate?.latitude,
            locations[0].geocodedCoordinate?.longitude
          ),
          false
        );
      }
    }
  };

  return <div ref={mapContainerRef} className={"w-full h-full"} />;
};

export default AppleMap;
