import { HexColor } from "@yext/studio";
import Icon, { IconName } from "./atoms/Icon";
import BodyText from "./atoms/BodyText";
import { useEffect, useState } from "react";
import MobilePanel from "./MobilePanel";
import useWindowSize from "../hooks/useWindowSize";
import DoctorFilterSearch from "./search/DoctorFilterSearch";
import { useSearchState } from "@yext/search-headless-react";
import { FilterSearch } from "@yext/search-ui-react";

export interface HeaderProps {
  backgroundColor?: HexColor;
  iconName?: IconName;
  includeSearch?: boolean;
}

export const initialProps = {
  backgroundColor: "#EDF0EB",
};

const Header = ({ backgroundColor, iconName, includeSearch }: HeaderProps) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { width } = useWindowSize();

  const staticFilters = useSearchState((state) => state.filters.static);

  useEffect(() => {
    if (width && width > 640) {
      setMobileSearchOpen(false);
    }
  }, [width]);

  useEffect(() => {
    if (staticFilters) {
      const specialityFilter = staticFilters.find(
        (sf) => sf.filter.fieldId === "taxonomy_relatedSpecialties.name"
      );
      if (specialityFilter) {
        setSearchText(specialityFilter.filter.value);
      }
    }
  }, [staticFilters]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9] flex flex-col px-4 h-[200px] sm:px-7 lg:flex-row lg:h-[100px] `}
      style={{ backgroundColor }}
    >
      <div className="flex justify-start py-8">
        <Icon color="text-green" name={iconName} height={"9"} width={"9"} />
      </div>
      {/* fake searchbar for mobile  */}
      <div
        className="bg-white border border-green flex items-center px-6 my-6 py-4 lg:hidden"
        onClick={() => setMobileSearchOpen(true)}
      >
        <Icon
          color="text-green"
          classname="text-sm"
          name="search"
          height={"4"}
          width={"4"}
        />
        <BodyText
          className="ml-3"
          text={searchText ?? "Condition, procedure, doctor..."}
          color={searchText ? "text-dark-gray" : "text-disabled-gray"}
        />
      </div>

      <div className="hidden lg:flex lg:ml-7">
        <FilterSearch
          placeholder="Condition, procedure, doctor"
          sectioned
          customCssClasses={{
            filterSearchContainer: "mb-0 flex items-center ",
            inputElement:
              "rounded-none border-0 border-b py-6 font-serif-regular placeholder:text-disabled-gray w-[350px]",
            optionsContainer: "z-50",
            option: "py-2 px-4",
            highlighted: "font-sans-bold text-blue text-sm",
            nonHighlighted: "font-sans-regular text-sm",
            sectionLabel: "font-sans-bold text-lg",
          }}
          // onSelect={handleSelect}
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
            filterSearchContainer: "mb-0 flex items-center",
            inputElement:
              "rounded-none border-0 border-b font-serif-regular py-6 placeholder:text-disabled-gray w-[250px]",
            option: "py-2 px-4",
            highlighted: "font-sans-bold text-blue text-sm",
            nonHighlighted: "font-sans-regular text-sm",
            sectionLabel: "font-sans-bold text-lg",
          }}
          // onSelect={handleSelect}
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
            filterSearchContainer: "mb-0 flex items-center",
            inputElement:
              "rounded-none border-0 border-b font-serif-regular py-6 placeholder:text-disabled-gray w-[250px]",
            option: "py-2 px-4",
            highlighted: "font-sans-bold text-blue text-sm",
            nonHighlighted: "font-sans-regular text-sm",
            sectionLabel: "font-sans-bold text-lg",
          }}
          // onSelect={handleSelect}
          searchFields={[
            {
              fieldApiName: "insuranceAccepted",
              entityType: "healthcareProfessional",
            },
          ]}
        />
        <button className="w-16 h-[49px] bg-green my-auto flex justify-center items-center rounded-r">
          <Icon
            color="text-white"
            classname="text-sm"
            name="search"
            height={"4"}
            width={"4"}
          />
        </button>
      </div>

      {/* Mobile Search */}
      {includeSearch && (
        <MobilePanel open={mobileSearchOpen} toggleOpen={setMobileSearchOpen}>
          <DoctorFilterSearch
            onSearchClick={() => setMobileSearchOpen(false)}
          />
        </MobilePanel>
      )}
    </header>
  );
};

export default Header;
