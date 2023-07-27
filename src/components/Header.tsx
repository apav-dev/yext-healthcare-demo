import { HexColor } from "@yext/studio";
import Icon, { IconName } from "./atoms/Icon";
import BodyText from "./atoms/BodyText";
import { useEffect, useState } from "react";
import MobilePanel from "./MobilePanel";
import useWindowSize from "../hooks/useWindowSize";
import DoctorFilterSearch from "./search/DoctorFilterSearch";

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

  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width > 640) {
      setMobileSearchOpen(false);
    }
  }, [width]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[8] flex flex-col px-4 sm:px-7 `}
      style={{ backgroundColor }}
    >
      <div className="flex justify-start pt-6">
        <Icon color="text-green" name={iconName} height={"9"} width={"9"} />
      </div>
      {/* fake searchbar for mobile  */}
      <div
        className="bg-white border border-green flex items-center px-6 my-6 py-4 sm:hidden"
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
          text="Condition, procedure, doctor..."
          color="text-disabled-gray"
        />
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
