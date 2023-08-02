import { HexColor } from "@yext/studio";
import Icon, { IconName } from "./atoms/Icon";
import BodyText from "./atoms/BodyText";
import { useEffect, useState } from "react";
import MobilePanel from "./MobilePanel";
import useWindowSize from "../hooks/useWindowSize";
import DoctorFilterSearch from "./search/DoctorFilterSearch";
import { useSearchState } from "@yext/search-headless-react";

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
      className={`fixed top-0 shadow left-0 w-full z-10 flex flex-col px-4 h-[200px] sm:px-7 lg:flex-row lg:h-[100px] `}
      style={{ backgroundColor }}
    >
      <div className="flex justify-start py-8">
        <Icon color="green" name={iconName} height={"9"} width={"9"} />
      </div>
      {/* fake searchbar for mobile  */}
      <div
        className="bg-white border border-green flex items-center px-6 my-6 py-4 lg:hidden"
        onClick={() => setMobileSearchOpen(true)}
      >
        <Icon
          color="green"
          classname="text-sm"
          name="search"
          height={"4"}
          width={"4"}
        />
        <BodyText
          className="ml-3"
          text={searchText ?? "Condition, procedure, doctor..."}
          color={searchText ? "dark-gray" : "disabled-gray"}
        />
      </div>

      <div className="hidden lg:flex">
        <DoctorFilterSearch />
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
