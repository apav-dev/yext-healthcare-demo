import { Result, useSearchState } from "@yext/search-headless-react";
import AppleMap, { MapLocation } from "./AppleMap";
import BodyText from "./atoms/BodyText";
import Icon from "./atoms/Icon";
import DoctorSearchCard, { HealthPro } from "./search/DoctorSearchCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createCtx } from "../createCtx";

interface DoctorLocatorProps {
  onShowList?: () => void;
}

export type LocatorContextType = {
  selectedId: string;
  setSelectedId: (id: string) => void;
};

// Setup LocatorProvider to pass the [selected, hovered, focused]Ids between Marker interactions and LocatorCard interactions
export const [useLocatorContext, LocatorProvider] =
  createCtx<LocatorContextType>();

const DoctorLocator = ({ onShowList }: DoctorLocatorProps) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<Result<HealthPro>>();

  const doctors = useSearchState(
    (state) => state.vertical.results
  ) as unknown as Result<HealthPro>[] | undefined;

  // useEffect(() => {
  //   if (selectedDoctorId) {
  //     setSelectedDoctor(
  //       doctors?.find((doctor) => doctor.rawData.id === selectedDoctorId)
  //     );
  //   }
  // }, [selectedDoctorId, doctors]);

  const locations = useMemo(() => {
    return (
      doctors?.map((doctor) => ({
        address: doctor.rawData.address,
        geocodedCoordinate: doctor.rawData.geocodedCoordinate,
        id: doctor.rawData.id,
      })) ?? []
    );
  }, [doctors]);

  return (
    <LocatorProvider
      value={{
        selectedId: selectedDoctorId,
        setSelectedId: setSelectedDoctorId,
      }}
    >
      <div className="w-full h-[calc(100vh-166px)] z-0 relative">
        <button
          className="absolute top-4 right-2 bg-white z-[1] rounded-sm flex px-4 py-3 shadow items-center"
          onClick={onShowList}
        >
          <Icon name="list" color="text-green" />
          <BodyText className="pl-3" color="text-green" text="SHOW LIST" />
        </button>
        <AppleMap locations={locations} />
        {/* {selectedDoctor && (
          <div className="absolute bottom-0 left-0 w-full z-[1]">
            <div className="p-4">
              <DoctorSearchCard result={selectedDoctor} />
            </div>
          </div>
        )} */}
      </div>
    </LocatorProvider>
  );
};

export default DoctorLocator;
