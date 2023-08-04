import { FilterSearch, OnSelectParams } from "@yext/search-ui-react";
import Icon from "../atoms/Icon";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import useWindowSize from "../../hooks/useWindowSize";

interface DoctorFilterSearchProps {
  // for closing the mobile search panel
  onSearchClick?: () => void;
}

// TODO: Add Icons next search queries
const DoctorFilterSearch = ({ onSearchClick }: DoctorFilterSearchProps) => {
  const staticFilters = useSearchState((state) => state.filters.static);

  const searchActions = useSearchActions();

  const { width } = useWindowSize();

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
    if (width && width > 1024) {
      searchActions.executeVerticalQuery();
    }
  };

  const handleSearchClick = () => {
    onSearchClick && onSearchClick();
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="px-4 lg:flex lg:items-center">
      <div className="px-4 bg-white flex flex-col lg:flex-row lg:bg-transparent lg:px-0">
        <FilterSearch
          placeholder="Condition, procedure, doctor"
          sectioned
          customCssClasses={{
            filterSearchContainer: "relative mb-0 lg:flex lg:items-center",
            inputElement:
              "rounded-none border-0 border-b py-6 font-serif-regular placeholder:text-disabled-gray lg:w-[350px]",
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
            filterSearchContainer: "mb-0 block lg:flex lg:items-center",
            inputElement:
              "rounded-none border-0 border-b font-serif-regular py-6 placeholder:text-disabled-gray lg:w-[250px]",
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
            filterSearchContainer: "mb-0 lg:flex lg:items-center",
            inputElement:
              "rounded-none border-0 border-b font-serif-regular py-6 placeholder:text-disabled-gray lg:w-[250px]",
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
          className="bg-green flex justify-center rounded-sm items-center py-2.5 mt-6 mb-4 lg:w-16 lg:h-[49px] lg:my-auto lg:rounded-r "
          onClick={handleSearchClick}
        >
          <Icon name="search" color="text-white" />
          <p className="text-white font-serif-regular text-sm ml-2 lg:hidden">
            Search
          </p>
        </button>
      </div>
    </div>
  );
};

export default DoctorFilterSearch;
