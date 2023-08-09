import { FilterSearch, OnSelectParams } from "@yext/search-ui-react";
import Icon from "../atoms/Icon";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import useWindowSize from "../../hooks/useWindowSize";
import SpecialtyIcon from "../Icons/SpecialtyIcon";
import LocationPinIcon from "../Icons/LocationPinIcon";
import InsuranceCardIcon from "../Icons/InsuranceCardIcon";

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
    if (navigateOnSearch) {
      const urlParams = new URLSearchParams({});
      urlParams.set(`sf_${params.newFilter.fieldId}`, params.newFilter.value);
      window.location.href = `/doctor-finder?${urlParams.toString()}`;
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
    <div className="hidden z-0 justify-center bg-stone-300 lg:flex ">
      <div className="px-4 py-8 lg:flex lg:items-center">
        <div className="px-8 py-2 bg-white flex rounded-[100px]">
          <div className="flex items-center">
            <SpecialtyIcon />
          </div>
          <FilterSearch
            placeholder="Condition, procedure, doctor"
            sectioned
            customCssClasses={{
              filterSearchContainer: "relative mb-0 lg:flex lg:items-center",
              inputElement:
                "rounded-none border-0 border-r py-6 placeholder:text-disabled-gray w-80",
              option: "py-2 px-4",
              highlighted: "text-blue text-sm",
              nonHighlighted: "text-sm",
              sectionLabel: "text-lg",
            }}
            onSelect={handleSelect}
            searchFields={[
              {
                fieldApiName: "taxonomy_relatedSpecialties.name",
                entityType: "healthcareProfessional",
              },
              {
                fieldApiName: "name",
                entityType: "healthcareProfessional",
              },
            ]}
          />
          <div className="flex items-center ml-8">
            <LocationPinIcon />
          </div>
          <FilterSearch
            placeholder="City, state, or zip code"
            customCssClasses={{
              filterSearchContainer: "mb-0 block lg:flex lg:items-center",
              inputElement:
                "rounded-none py-6 border-0 border-r placeholder:text-disabled-gray w-80",
              option: "py-2 px-4",
              highlighted: "text-blue text-sm",
              nonHighlighted: "text-sm",
              sectionLabel: "text-lg",
            }}
            onSelect={handleSelect}
            searchFields={[
              {
                fieldApiName: "builtin.location",
                entityType: "healthcareProfessional",
              },
            ]}
          />
          <div className="flex items-center ml-8">
            <InsuranceCardIcon />
          </div>
          <FilterSearch
            placeholder="Insurance"
            customCssClasses={{
              filterSearchContainer: "mb-0 lg:flex lg:items-center",
              inputElement:
                "rounded-none py-6 border-0 placeholder:text-disabled-gray w-80",
              option: "py-2 px-4",
              highlighted: "text-blue text-sm",
              nonHighlighted: "text-sm",
              sectionLabel: "text-lg",
            }}
            onSelect={handleSelect}
            searchFields={[
              {
                fieldApiName: "insuranceAccepted",
                entityType: "healthcareProfessional",
              },
            ]}
          />
          <button
            className="bg-green-700 flex justify-center items-center p-6 my-auto rounded-full"
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
