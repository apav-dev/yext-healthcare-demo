import { useState } from "react";
import Address from "./Address";
import { C_locationsPracticingAt } from "../types/autogen";
import Icon from "./atoms/Icon";
import AppleMap from "./AppleMap";
import { twMerge } from "tailwind-merge";
export interface AppleMapProps {
  locations?: C_locationsPracticingAt[];
}

const DoctorMiniMap = ({ locations }: AppleMapProps) => {
  const [locationIdx, setLocationIdx] = useState(0);

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

  return (
    <div className="w-full sm:w-[450px]">
      <div className="w-full h-80 ">
        <AppleMap
          locations={locations}
          center={{
            latitude: locations[locationIdx].geocodedCoordinate?.latitude,
            longitude: locations[locationIdx].geocodedCoordinate?.longitude,
          }}
        />
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
