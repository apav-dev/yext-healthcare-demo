import { useState } from "react";
import Address from "./Address";

import AppleMap from "./AppleMap";
import { twMerge } from "tailwind-merge";
import Icon from "./atoms/Icon";

export interface AppleMapProps {
  locations?: C_locationsPracticingAt[];
}

const DoctorMiniMap = ({ locations }: AppleMapProps) => {
  const [locationIdx, setLocationIdx] = useState(0);

  console.log("locations", locations);

  const toggleLocation = (step: -1 | 1) => {
    if (!locations) {
      return;
    }

    // If we're at the end of the list, loop back to the 0th index
    const newLocationIdx =
      locationIdx + step === locations.length
        ? 0
        : locationIdx + step < 0
        ? locations.length - 1
        : locationIdx + step;

    setLocationIdx(newLocationIdx);
  };

  const center = locations?.[locationIdx]
    ? {
        latitude: locations[locationIdx].geocodedCoordinate?.latitude,
        longitude: locations[locationIdx].geocodedCoordinate?.longitude,
      }
    : undefined;

  return (
    <div className="w-full sm:w-[450px]">
      <div className="w-full h-80 ">
        <AppleMap doctors={locations} center={center} />
      </div>
      {locations?.[locationIdx]?.address && (
        <div
          className={twMerge(
            "flex justify-between",
            locations.length < 2 && "justify-center"
          )}
        >
          {locations && locations.length > 1 && (
            <button onClick={() => toggleLocation(-1)}>
              <Icon name="chevron-left" classname={"h-7 w-7"} />
            </button>
          )}
          <Address
            containerClassname="flex flex-col items-center mt-6"
            address={locations[locationIdx]?.address ?? {}}
          />
          {locations && locations.length > 1 && (
            <button onClick={() => toggleLocation(1)}>
              <Icon name="chevron-right" classname="h-7 w-7" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorMiniMap;
