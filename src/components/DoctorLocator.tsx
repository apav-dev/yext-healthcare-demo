import { Result, useSearchState } from "@yext/search-headless-react";
import AppleMap, { MapLocation } from "./AppleMap";
import BodyText from "./atoms/BodyText";
import Icon from "./atoms/Icon";
import DoctorSearchCard, { HealthPro } from "./search/DoctorSearchCard";
import { useEffect, useMemo, useState } from "react";
import { createCtx } from "../createCtx";
import CenteredContainer from "./atoms/CenteredContainer";
import {
  Facets,
  Pagination,
  ResultsCount,
  VerticalResults,
} from "@yext/search-ui-react";
import { twMerge } from "tailwind-merge";
import MobilePanel from "./MobilePanel";
import FacetPopover from "./search/FacetPopover";
import useWindowSize from "../hooks/useWindowSize";

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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const doctors = useSearchState(
    (state) => state.vertical.results
  ) as unknown as Result<HealthPro>[] | undefined;

  const { width } = useWindowSize();

  useEffect(() => {
    console.log("selectedDoctorId", selectedDoctorId);
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

  // const handleLocationSelect = (location: MapLocation) => {
  //   console.log("handleLocationSelect", location);
  //   setSelectedDoctorId(location.id);
  // };

  return (
    <LocatorProvider
      value={{
        selectedId: selectedDoctorId,
        setSelectedId: setSelectedDoctorId,
      }}
    >
      <div
        className={twMerge(
          "absolute left-0 top-[356px] h-[calc(100vh-356px)] z-[8] bg-white overflow-y-auto",
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
              <Icon name="map" color="text-green" />
              <BodyText color="green" text="SHOW MAP" />
            </button>
          </div>
          <VerticalResults
            customCssClasses={{
              verticalResultsContainer: "flex flex-col gap-y-6 lg:gap-y-0",
            }}
            CardComponent={DoctorSearchCard}
          />
          {/* <Pagination
            customCssClasses={{
              paginationContainer: "py-8 shadow-none",
              label: "font-pt-sans-regular border-0",
              selectedLabel: "font-pt-sans-bold border-0 bg-green text-white",
              leftIconContainer: "border-0 px-4",
              rightIconContainer: "border-0 px-4",
            }}
          /> */}
        </CenteredContainer>
      </div>
      <div className="w-full h-[calc(100vh-356px)] z-0 relative">
        <button
          className="absolute top-4 right-2 bg-white z-[1] rounded-sm flex px-4 py-3 shadow items-center lg:hidden"
          onClick={() => setShowList(true)}
        >
          <Icon name="list" color="text-green" />
          <BodyText className="pl-3" color="green" text="SHOW LIST" />
        </button>
        <AppleMap
          locations={locations}
          // onLocationSelect={handleLocationSelect}
        />
        {/* {selectedDoctor && (
          <div className="absolute bottom-0 left-0 w-full z-[1]">
            <div className="p-4">
              <DoctorSearchCard result={selectedDoctor} />
            </div>
          </div>
        )} */}
      </div>
      {showList && (
        <div className="absolute bottom-6 left-0 w-full z-[9] lg:hidden">
          <button
            className="bg-green flex justify-center items-center rounded mx-auto px-10 py-3 shadow"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Icon
              color="text-white"
              classname="text-sm"
              name="filter"
              height={"4"}
              width={"4"}
            />
            <BodyText className="ml-3" color="white" text="Sort / Filter" />
          </button>
        </div>
      )}
      {/* Mobile Filters */}
      <MobilePanel
        open={mobileFiltersOpen}
        toggleOpen={setMobileFiltersOpen}
        panelClassName="bg-white"
        title="Filters"
      >
        <Facets
          customCssClasses={{
            facetsContainer: "px-6 py-8 ",
            titleLabel: "font-sans-bold text-lg text-green",
            option: "py-2",
            optionInput: "accent-green",
            optionLabel: "font-sans-regular text-base",
          }}
        />
      </MobilePanel>
    </LocatorProvider>
  );
};

export default DoctorLocator;
