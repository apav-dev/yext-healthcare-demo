import { FilterSearch, OnSelectParams } from "@yext/search-ui-react";
import Icon from "../atoms/Icon";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";

interface DoctorFilterSearchProps {
  // for closing the mobile search panel
  onSearchClick?: () => void;
}

// TODO: Add Icons next search queries
const DoctorFilterSearch = ({ onSearchClick }: DoctorFilterSearchProps) => {
  const staticFilters = useSearchState((state) => state.filters.static);

  const searchActions = useSearchActions();

  const handleSelect = (params: OnSelectParams) => {
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
  };

  const handleSearchClick = () => {
    onSearchClick && onSearchClick();
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="px-4">
      <div className="px-4 bg-white flex flex-col">
        <FilterSearch
          placeholder="Condition, procedure, doctor"
          sectioned
          customCssClasses={{
            filterSearchContainer: "mb-0",
            inputElement:
              "rounded-none border-0 border-b py-6 font-serif-regular placeholder:text-disabled-gray",
            optionsContainer: "z-50",
            option: "py-2 px-4",
            highlighted: "font-sans-bold text-blue text-sm",
            nonHighlighted: "font-sans-regular text-sm",
            sectionLabel: "font-sans-bold text-lg",
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
        <FilterSearch
          placeholder="City, state, or zip code"
          customCssClasses={{
            filterSearchContainer: "mb-0",
            inputElement:
              "rounded-none border-0 border-b font-serif-regular py-6 placeholder:text-disabled-gray",
            option: "py-2 px-4",
            highlighted: "font-sans-bold text-blue text-sm",
            nonHighlighted: "font-sans-regular text-sm",
            sectionLabel: "font-sans-bold text-lg",
          }}
          onSelect={handleSelect}
          searchFields={[
            {
              fieldApiName: "builtin.location",
              entityType: "healthcareProfessional",
            },
          ]}
        />
        <FilterSearch
          placeholder="Insurance"
          customCssClasses={{
            filterSearchContainer: "mb-0",
            inputElement:
              "rounded-none border-0 border-b font-serif-regular py-6 placeholder:text-disabled-gray",
            option: "py-2 px-4",
            highlighted: "font-sans-bold text-blue text-sm",
            nonHighlighted: "font-sans-regular text-sm",
            sectionLabel: "font-sans-bold text-lg",
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
          className="bg-green flex justify-center rounded-sm items-center py-2.5 mt-6 mb-4 "
          onClick={handleSearchClick}
        >
          <Icon name="search" color="text-white" />
          <p className="text-white font-serif-regular text-sm ml-2">Search</p>
        </button>
      </div>
    </div>
  );
};

export default DoctorFilterSearch;
