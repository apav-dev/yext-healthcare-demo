import HelpIcon from "@mui/icons-material/Help";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EastIcon from "@mui/icons-material/East";
import NearMeIcon from "@mui/icons-material/NearMe";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import DownloadingIcon from "@mui/icons-material/Downloading";
import DashboardIcon from "@mui/icons-material/Dashboard";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { cva } from "cva";
import { cn } from "../../utils";

export const MUIIcons = {
  HelpIcon,
  CancelIcon,
  SearchIcon,
  FavoriteIcon,
  DateRangeIcon,
  AccountBoxIcon,
  KeyboardArrowDownIcon,
  EastIcon,
  NearMeIcon,
  PanToolAltIcon,
  CheckCircleIcon,
  InfoIcon,
  DownloadingIcon,
  DashboardIcon,
  YouTubeIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  PinterestIcon,
};

export type MUIIconType = keyof typeof MUIIcons;

const styledTextVariants = cva("", {
  variants: {
    color: {
      moss: "text-moss",
      sage: "text-sage",
      mint: "text-mint",
    },
    size: {
      L: "w-6 h-6",
      M: "w-5 h-5",
      S: "w-4 h-4",
    },
  },
});

export interface MUIIconProps {
  /**
   * @displayName Icon
   **/
  icon: MUIIconType;
  /**
   * @displayName Color
   **/
  color?: "moss" | "sage" | "mint";
  /**
   * @displayName Size
   **/
  size?: "S" | "M" | "L";
  /**
   * @tooltip Used to override the default styles
   */
  className?: string;
}

export const initialProps: MUIIconProps = {
  icon: "HelpIcon",
  color: "moss",
  size: "M",
  className: "",
};

const MUIIcon = ({ icon, color, size, className }: MUIIconProps) => {
  const Icon: any = MUIIcons[icon];

  return (
    <Icon
      className={cn(
        styledTextVariants({
          color,
          size,
          className,
        })
      )}
    />
  );
};

export default MUIIcon;
