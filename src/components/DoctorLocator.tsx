import { Result, useSearchState } from "@yext/search-headless-react";
import AppleMap, { MapLocation } from "./AppleMap";
import BodyText from "./atoms/BodyText";
import Icon from "./atoms/Icon";
import DoctorSearchCard, { HealthPro } from "./search/DoctorSearchCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createCtx } from "../createCtx";
import CenteredContainer from "./atoms/CenteredContainer";
import {
  Pagination,
  ResultsCount,
  VerticalResults,
} from "@yext/search-ui-react";
import { twMerge } from "tailwind-merge";
import useWindowSize from "../hooks/useWindowSize";
import DoctorMapCard from "./search/DoctorMapCard";
import { FaMap, FaList } from "react-icons/fa";

export type LocatorContextType = {
  selectedId: string;
  setSelectedId: (id: string) => void;
};

// Setup LocatorProvider to pass the [selected, hovered, focused]Ids between Marker interactions and LocatorCard interactions
export const [useLocatorContext, LocatorProvider] =
  createCtx<LocatorContextType>();

const DoctorLocator = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<Result<HealthPro>>();
  const [showList, setShowList] = useState(true);

  const doctors = useSearchState(
    (state) => state.vertical.results
  ) as unknown as Result<HealthPro>[] | undefined;

  const { width } = useWindowSize();

  useEffect(() => {
    if (selectedDoctorId) {
      setSelectedDoctor(
        doctors?.find((doctor) => doctor.rawData.id === selectedDoctorId)
      );
    }
  }, [selectedDoctorId, doctors]);

  useEffect(() => {
    if (width && width > 1024) {
      setShowList(true);
    }
  }, [width]);

  const locations = useMemo(() => {
    return (
      doctors?.map((doctor) => ({
        address: doctor.rawData.address,
        geocodedCoordinate: doctor.rawData.geocodedCoordinate,
        id: doctor.rawData.id,
      })) ?? []
    );
  }, [doctors]);

  const handleLocationSelect = useCallback(
    (location: MapLocation) => {
      setSelectedDoctorId(location.id);
    },
    [setSelectedDoctorId]
  );

  return (
    <LocatorProvider
      value={{
        selectedId: selectedDoctorId,
        setSelectedId: setSelectedDoctorId,
      }}
    >
      <div className="h-[calc(100vh-208px)] lg:flex lg:h-[calc(100vh-356px)]">
        <div
          className={twMerge(
            "absolute inset-0 top-52 z-[8] bg-white overflow-y-auto lg:static lg:w-3/5",
            !showList && "hidden"
          )}
        >
          <CenteredContainer classname="flex flex-col lg:px-0">
            <div className="flex justify-between items-center pt-6 pb-4 lg:hidden">
              <ResultsCount
                customCssClasses={{
                  resultsCountContainer: "font-sans-bold text-lg mb-0 p-0",
                }}
              />
              <button
                className="flex gap-x-3 "
                onClick={() => setShowList(false)}
              >
                <FaMap className="text-green-700 w-5 h-5" color="" />
                <p className="text-green-700 font-semibold">SHOW MAP</p>
              </button>
            </div>
            <VerticalResults
              customCssClasses={{
                verticalResultsContainer: "flex flex-col gap-y-6 lg:gap-y-0",
              }}
              CardComponent={DoctorSearchCard}
            />
            <Pagination
              customCssClasses={{
                paginationContainer: "py-8 shadow-none",
                label: "font-pt-sans-regular border-0",
                selectedLabel:
                  "font-pt-sans-bold border-0 bg-green-700 text-white",
                leftIconContainer: "border-0 px-4",
                rightIconContainer: "border-0 px-4",
              }}
            />
          </CenteredContainer>
        </div>
        <div className="w-full h-full top-20 z-0 relative lg:top-0">
          <button
            className="absolute top-4 right-2 bg-white z-[1] rounded-sm flex gap-x-3 px-4 py-3 shadow items-center lg:hidden"
            onClick={() => setShowList(true)}
          >
            <FaList className="text-green-700 w-5 h-5" color="" />
            <p className="text-green-700 font-semibold ml-1">SHOW LIST</p>
          </button>
          <AppleMap
            locations={locations}
            onLocationSelect={handleLocationSelect}
            // center={{
            //   latitude: 40.7128,
            //   longitude: -74.006,
            // }}
          />
          {selectedDoctor && (
            <div className="absolute bottom-0 left-0 w-full z-[1]">
              <div className="p-4">
                <DoctorMapCard
                  name={selectedDoctor.rawData.name}
                  address={selectedDoctor.rawData.address}
                  specialty={
                    selectedDoctor.rawData.taxonomy_relatedSpecialties?.[0].name
                  }
                  headshot={selectedDoctor.rawData.headshot}
                  slug={selectedDoctor.rawData.slug}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </LocatorProvider>
  );
};

export default DoctorLocator;
