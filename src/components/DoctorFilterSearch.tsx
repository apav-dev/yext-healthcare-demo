import { FilterSearch } from "@yext/search-ui-react";
import Icon from "./atoms/Icon";

interface SearchBarProps {}

// TODO: Add Icons next search queries
const DoctorFilterSearch: React.FC<SearchBarProps> = () => {
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
          searchFields={[
            {
              fieldApiName: "insuranceAccepted",
              entityType: "healthcareProfessional",
            },
          ]}
        />
        <button className="bg-green flex justify-center rounded-sm items-center py-2.5 mt-6 mb-4 ">
          <Icon name="search" color="text-white" />
          <p className="text-white font-serif-regular text-sm ml-2">Search</p>
        </button>
      </div>
    </div>
  );
};

export default DoctorFilterSearch;
