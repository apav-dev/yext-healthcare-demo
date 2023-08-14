import { useEffect, useRef, useState } from "react";
import { Address, Coordinate } from "../types/autogen";
import { useLocatorContext } from "./DoctorLocator";
import useWindowSize from "../hooks/useWindowSize";

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

  // const { selectedId, setSelectedId } = useLocatorContext();

  const { width } = useWindowSize();

  useEffect(() => {
    console.log("loading mapkit");
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

  useEffect(() => {
    console.log("locations", locations);
    if (mapContainerRef.current && window.mapkit) {
      if (map && locations && locations.length > 0) {
        // const landmarkAnnotationCallout = {
        //   calloutElementForAnnotation: (annotation) => {
        //     // const landmark = annotationsToLandmark.get(annotation);

        //     const div = document.createElement("div");
        //     div.className = "landmark";

        //     const title = div.appendChild(document.createElement("h1"));
        //     title.textContent = "Hello World";

        //     const section = div.appendChild(document.createElement("section"));

        //     return div;
        //   },

        //   // calloutAnchorOffsetForAnnotation: (annotation, element) => offset,

        //   // calloutAppearanceAnimationForAnnotation: (annotation) =>
        //   //   ".4s cubic-bezier(0.4, 0, 0, 1.5) " +
        //   //   "0s 1 normal scale-and-fadein",
        // };
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
              // callout: landmarkAnnotationCallout,
            }
            // {
            //   title: "test",
            // }
          );

          if (idx === 0 && width && width < 1024) {
            marker.selected = true;
          }

          // marker.addEventListener(
          //   "click",
          //   (event: any) => {
          //     handleLocationSelect(event.target);
          //   },
          //   location
          // );

          return marker;
        });

        map.showItems(markers);
        const center = findCenter();

        map.setCenterAnimated(
          new window.mapkit.Coordinate(center.latitude, center.longitude),
          false
        );
      }
    }
  }),
    [locations];

  // useEffect(() => {
  //   if (center && map) {
  //     map.setCenterAnimated(
  //       new window.mapkit.Coordinate(center.latitude, center.longitude)
  //     );
  //   }
  // }, [center]);

  const handleLocationSelect = (target: any) => {
    const location = target._listeners.select?.[0].thisObject;
    console.log("handleLocationSelect", location);
    // if (location) {
    //   setSelectedId(location.id);
    // }
  };

  return <div ref={mapContainerRef} className={"w-full h-full"} />;
};

export default AppleMap;
