import { FilterSearch, OnSelectParams } from "@yext/search-ui-react";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import SpecialtyIcon from "../Icons/SpecialtyIcon";
import LocationPinIcon from "../Icons/LocationPinIcon";
import InsuranceCardIcon from "../Icons/InsuranceCardIcon";
import useWindowSize from "../hooks/useWindowSize";
import Icon from "../atoms/Icon";

interface DoctorFilterSearchProps {
  // for closing the mobile search panel
  onSearchClick?: () => void;
  navigateOnSearch?: boolean;
}

// TODO: Add Icons next search queries
const DoctorFilterSearch = ({
  onSearchClick,
  navigateOnSearch,
}: DoctorFilterSearchProps) => {
  const staticFilters = useSearchState((state) => state.filters.static);

  const searchActions = useSearchActions();

  const { width } = useWindowSize();

  const handleSelect = (params: OnSelectParams) => {
    console.log(params);
    if (navigateOnSearch) {
      const urlParams = new URLSearchParams({});
      urlParams.set(`sf_${params.newFilter.fieldId}`, params.newFilter.value);

      let path = `/doctor-finder?${urlParams.toString()}`;

      if (params.newFilter.fieldId === "builtin.location") {
        path = path + "&locationDisplayName=" + params.newDisplayName;
      }

      window.location.href = path;
    } else {
      const filteredFilters =
        staticFilters?.filter(
          // TODO: Typescript cleanup
          (sf) => sf.filter.fieldId !== params.newFilter.fieldId
        ) ?? [];
      searchActions.setStaticFilters([
        ...filteredFilters,
        {
          filter: params.newFilter,
          selected: true,
          displayName: params.newDisplayName,
        },
      ]);
      if (width && width > 1024) {
        searchActions.executeVerticalQuery();
      }
    }
  };

  const handleSearchClick = () => {
    onSearchClick && onSearchClick();
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="z-0 justify-center lg:bg-stone-300 lg:flex ">
      <div className="px-4 py-8 lg:flex lg:items-center">
        <div className="px-8 py-2 bg-white flex flex-col border lg:rounded-[100px] lg:flex-row lg:border-0">
          <div className="flex items-center border-b lg:border-0">
            <SpecialtyIcon />
            <FilterSearch
              placeholder="Specialty, doctor..."
              sectioned
              customCssClasses={{
                filterSearchContainer:
                  "relative mb-0 flex-1 lg:flex lg:items-center",
                inputElement:
                  "rounded-none border-0 lg:border-r py-6 placeholder:text-disabled-gray w-80",
                option: "py-2 px-4 text-left",
                highlighted: "text-blue text-sm",
                nonHighlighted: "text-sm",
                sectionLabel: "text-lg text-left",
              }}
              onSelect={handleSelect}
              searchFields={[
                {
                  fieldApiName: "taxonomy_relatedSpecialties.name",
                  entityType: "healthcareProfessional",
                },
                {
                  fieldApiName:
                    "taxonomy_relatedSpecialties.taxonomy_relatedConditions.name",
                  entityType: "healthcareProfessional",
                },
                {
                  fieldApiName:
                    "taxonomy_relatedSpecialties.taxonomy_relatedProcedures.name",
                  entityType: "healthcareProfessional",
                },
                {
                  fieldApiName:
                    "taxonomy_relatedSpecialties.taxonomy_relatedReasonsForVisit.name",
                  entityType: "healthcareProfessional",
                },
                {
                  fieldApiName:
                    "taxonomy_relatedSpecialties.taxonomy_subspecialties.name",
                  entityType: "healthcareProfessional",
                },
                {
                  fieldApiName: "name",
                  entityType: "healthcareProfessional",
                },
              ]}
            />
          </div>

          <div className="flex items-center border-b lg:border-0 lg:ml-8">
            <LocationPinIcon />
            <FilterSearch
              placeholder="City, state, or zip code"
              customCssClasses={{
                filterSearchContainer: "mb-0 block lg:flex lg:items-center",
                inputElement:
                  "rounded-none py-6 border-0 lg:border-r placeholder:text-disabled-gray w-80",
                option: "py-2 px-4 text-left",
                highlighted: "text-blue text-sm",
                nonHighlighted: "text-sm",
                sectionLabel: "text-lg text-left",
              }}
              onSelect={handleSelect}
              searchFields={[
                {
                  fieldApiName: "builtin.location",
                  entityType: "healthcareProfessional",
                },
              ]}
            />
          </div>

          <div className="flex items-center border-b lg:border-0 lg:ml-8">
            <InsuranceCardIcon />
            <FilterSearch
              placeholder="Insurance"
              customCssClasses={{
                filterSearchContainer: "mb-0 lg:flex lg:items-center",
                inputElement:
                  "rounded-none py-6 border-0 placeholder:text-disabled-gray w-80",
                option: "py-2 px-4 text-left",
                highlighted: "text-blue text-sm",
                nonHighlighted: "text-sm",
                sectionLabel: "text-lg text-left",
              }}
              onSelect={handleSelect}
              searchFields={[
                {
                  fieldApiName: "insuranceAccepted",
                  entityType: "healthcareProfessional",
                },
              ]}
            />
          </div>

          <button
            className="bg-green-700 flex justify-center items-center p-6 my-6 rounded-full lg:my-0"
            onClick={handleSearchClick}
          >
            <Icon name="search" color="text-white" />
            <p className="text-white text-sm ml-2 lg:hidden">Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilterSearch;
