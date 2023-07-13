// import HospitalIcon from "../Icons/HomeIcon";
// import FileCertificateIcon from "../Icons/FileCertificateIcon";
// import HashtagIcon from "../Icons/HashtagIcon";
// import HomeIcon from "../Icons/HomeIcon";
// import LanguageIcon from "../Icons/LanguageIcon";
// import SchoolIcon from "../Icons/SchoolIcon";
// import StethoscopeIcon from "../Icons/Stethoscopeicon";
// import MarsVenusIcon from "../Icons/MarsVenusIcon";
// import StarIcon from "../Icons/StarIcon";
import { FaStar } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";
import { IconType } from "react-icons";

export type IconName = "home" | "star" | "hand";

const icons: Record<IconName, IconType> = {
  // "file-certificate": FileCertificateIcon,
  // hashtag: HashtagIcon,
  home: BiHomeHeart,
  // hospital: HospitalIcon,
  // language: LanguageIcon,
  // school: SchoolIcon,
  // stethoscope: StethoscopeIcon,
  // "venus-mars": MarsVenusIcon,
  star: FaStar,
  hand: FaHandHoldingMedical,
};

export interface IconProps {
  name?: IconName;
  color?:
    | "light-green"
    | "yellow"
    | "dark-gray"
    | "blue"
    | "green"
    | "dark-green";
  width?: number;
  height?: number;
}

const colors = {
  "light-green": "#4F6A4E",
  yellow: "#F2C94C",
  "dark-gray": "#333333",
  blue: "#2F80ED",
  green: "#219653",
  "dark-green": "#27AE60",
};

export const initialProps: Required<IconProps> = {
  name: "star",
  color: "dark-gray",
  width: 20,
  height: 20,
};

export default function Icon({ name, color, width, height }: IconProps) {
  const IconComponent = icons[name ?? initialProps.name];
  return (
    <IconComponent
      className={`h-${height} w-${width}`}
      style={{ fill: color ? colors[color] : colors[initialProps.color] }}
    />
  );
}
