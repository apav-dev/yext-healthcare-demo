import { memo, useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { Address, Coordinate } from "./types/autogen";
import { HealthPro } from "./search/DoctorSearchCard";
import DoctorMapCard from "./search/DoctorMapCard";
import DoctorPopover from "./DoctorPopover";

export interface MapLocation {
  id: string;
  address?: Address;
  geocodedCoordinate?: Coordinate;
}

export interface AppleMapProps {
  doctors?: HealthPro[];
  center?: {
    latitude: number;
    longitude: number;
  };
  mapContainerClassname?: string;
  onLocationSelect?: (location: MapLocation) => void;
}

const AppleMap = ({ doctors, center, onLocationSelect }: AppleMapProps) => {
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
      if (doctors && doctors.length > 0) {
        // Offset between the callout and the associated annotation marker
        // const offset = new DOMPoint(-148, -78);

        const markers = doctors?.map((doctor, idx) => {
          // Each annotation will use these functions to present a custom callout
          const doctorAnnotationCallout = {
            calloutElementForAnnotation: () => {
              // Render your React component to a string
              const renderedCard = renderToString(
                <DoctorPopover
                  name={doctor.name}
                  address={doctor.address}
                  headshot={doctor.headshot}
                  specialty={doctor.taxonomy_relatedSpecialties?.[0].name}
                />
              );

              // Create a new div and set its innerHTML to the rendered string
              const div = document.createElement("div");
              div.innerHTML = renderedCard;

              // Return the div containing the rendered React component
              return div;
            },
          };

          const marker = new window.mapkit.MarkerAnnotation(
            new window.mapkit.Coordinate(
              doctor.geocodedCoordinate?.latitude,
              doctor.geocodedCoordinate?.longitude
            ),
            {
              glyphText: "●",
              glyphColor: "#ffffff",
              color: "#4F6A4E",
              callout: doctorAnnotationCallout,
            }
          );

          marker.addEventListener("select", handleLocationSelect, doctor);

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
    [doctors];

  const findCenter = () => {
    if (doctors && doctors.length > 0) {
      const minLat = Math.min(
        ...doctors.map((location) => location.geocodedCoordinate?.latitude)
      );
      const maxLat = Math.max(
        ...doctors.map((location) => location.geocodedCoordinate?.latitude)
      );
      const minLng = Math.min(
        ...doctors.map((location) => location.geocodedCoordinate?.longitude)
      );
      const maxLng = Math.max(
        ...doctors.map((location) => location.geocodedCoordinate?.longitude)
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
