import { Result, useSearchState } from "@yext/search-headless-react";
import AppleMap, { MapLocation } from "./AppleMap";
import BodyText from "./atoms/BodyText";
import Icon from "./atoms/Icon";
import DoctorSearchCard, { HealthPro } from "./search/DoctorSearchCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createCtx } from "../createCtx";
import CenteredContainer from "./atoms/CenteredContainer";
import {
  Facets,
  Pagination,
  ResultsCount,
  StandardFacet,
  VerticalResults,
} from "@yext/search-ui-react";
import { twMerge } from "tailwind-merge";
import MobilePanel from "./MobilePanel";
import FacetPopover from "./search/FacetPopover";

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
      <div className="hidden lg:block">
        <div className="flex items-center px-6 py-4 border-b border-gray-200 h-[80px]">
          <ResultsCount
            customCssClasses={{
              resultsCountContainer: "font-sans-bold text-2xl mb-0 p-0",
            }}
          />
          <div className="flex ml-8 space-x-3.5">
            <FacetPopover
              facetFieldId="taxonomy_relatedSpecialties.name"
              label="Specialty"
            />
            <FacetPopover
              facetFieldId="taxonomy_relatedSpecialties.taxonomy_relatedConditions.name"
              label="Conditions"
            />
            <FacetPopover
              facetFieldId="insuranceAccepted"
              label="Insurance Accepted"
            />
            <FacetPopover facetFieldId="gender" label="Gender" />
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          "absolute inset-0 top-[200px] z-[8] pb-24 bg-white overflow-y-auto lg:top-[180px] lg:right-2/3",
          !showList && "hidden"
        )}
      >
        <CenteredContainer classname="flex flex-col">
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
              <BodyText color="text-green" text="SHOW MAP" />
            </button>
          </div>
          <VerticalResults
            customCssClasses={{
              verticalResultsContainer: "flex flex-col gap-y-6 ",
            }}
            CardComponent={DoctorSearchCard}
          />
          <Pagination
            customCssClasses={{
              paginationContainer: "py-8 shadow-none",
              label: "font-pt-sans-regular border-0",
              selectedLabel: "font-pt-sans-bold border-0 bg-green text-white",
              leftIconContainer: "border-0 px-4 transform",
              rightIconContainer: "border-0 px-4 transform",
            }}
          />
        </CenteredContainer>
      </div>
      <div className="w-full h-[calc(100vh-200px)] z-0 relative lg:h-[calc(100vh-180px)]">
        <button
          className="absolute top-4 right-2 bg-white z-[1] rounded-sm flex px-4 py-3 shadow items-center lg:hidden"
          onClick={() => setShowList(true)}
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
            <BodyText
              className="ml-3"
              color="text-white"
              text="Sort / Filter"
            />
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
