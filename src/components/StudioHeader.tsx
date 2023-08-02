import { HexColor } from "@yext/studio";
import Icon, { IconName } from "./atoms/Icon";

export interface HeaderProps {
  backgroundColor?: HexColor;
  iconName?: IconName;
  includeSearch?: boolean;
}

export const initialProps = {
  backgroundColor: "#EDF0EB",
};

const Header = ({ backgroundColor, iconName }: HeaderProps) => {
  return (
    <header
      className={`shadow w-full z-10 flex flex-col px-4 h-[200px] sm:px-7 lg:flex-row lg:h-[100px] `}
      style={{ backgroundColor }}
    >
      <div className="flex justify-start py-8">
        <Icon
          color="green"
          name={iconName}
          height={"9"}
          width={"9"}
          hexColor={"#4F6A4E"}
        />
      </div>
    </header>
  );
};

export default Header;
