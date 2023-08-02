import { BiHomeHeart } from "react-icons/bi";
import {
  FaSchool,
  FaHospital,
  FaStethoscope,
  FaLanguage,
  FaVenusMars,
  FaHashtag,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaHandHoldingMedical,
  FaSearch,
  FaMap,
  FaList,
  FaFilter,
} from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import {
  Color,
  TailwindSize,
  tailwindHeight,
  tailwindWidth,
  textColorMap,
} from "../../types/tailwind";
import { HexColor } from "@yext/studio";

export type IconName =
  | "home"
  | "star"
  | "hand"
  | "file-certificate"
  | "hashtag"
  | "school"
  | "hospital"
  | "language"
  | "stethoscope"
  | "venus-mars"
  | "chevron-left"
  | "chevron-right"
  | "search"
  | "map"
  | "list"
  | "filter";

const icons: Record<IconName, IconType> = {
  "file-certificate": TbFileCertificate,
  hashtag: FaHashtag,
  home: BiHomeHeart,
  hospital: FaHospital,
  language: FaLanguage,
  school: FaSchool,
  stethoscope: FaStethoscope,
  "venus-mars": FaVenusMars,
  star: FaStar,
  hand: FaHandHoldingMedical,
  "chevron-left": FaChevronLeft,
  "chevron-right": FaChevronRight,
  search: FaSearch,
  map: FaMap,
  list: FaList,
  filter: FaFilter,
};

export interface IconProps {
  name?: IconName;
  color?: Color;
  hexColor?: HexColor;
  width?: TailwindSize;
  height?: TailwindSize;
  classname?: string;
}

export const initialProps: IconProps = {
  name: "star",
  color: "dark-gray",
  width: "20",
  height: "20",
  classname: "",
};

export default function Icon({
  name,
  color,
  width,
  height,
  classname,
  hexColor,
}: IconProps) {
  const iconColor = textColorMap[color ?? "dark-gray"];

  const IconComponent = icons[name ?? "star"];
  const computedClassname = twMerge(
    `${tailwindHeight[height ?? "5"]} ${
      tailwindWidth[width ?? "5"]
    } ${iconColor}`,
    classname ?? initialProps.classname
  );
  return (
    <IconComponent className={computedClassname} style={{ color: hexColor }} />
  );
}
