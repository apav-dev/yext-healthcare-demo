import { FaStar } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
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
} from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import {
  TailwindSize,
  tailwindHeight,
  tailwindWidth,
} from "../../types/tailwind";

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
  | "chevron-right";

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
};

export interface IconProps {
  name?: IconName;
  color?:
    | "text-light-green"
    | "text-yellow"
    | "text-dark-gray"
    | "text-blue"
    | "text-green"
    | "text-dark-green"
    | "text-disabled-gray";
  width?: TailwindSize;
  height?: TailwindSize;
  classname?: string;
}

export const initialProps: IconProps = {
  name: "star",
  color: "text-dark-gray",
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
}: IconProps) {
  const IconComponent = icons[name ?? "star"];
  const computedClassname = twMerge(
    `${tailwindHeight[height ?? "5"]} ${tailwindWidth[width ?? "5"]} ${color}`,
    classname ?? initialProps.classname
  );
  return (
    <IconComponent
      className={computedClassname}
      // style={{ fill: color ? colors[color] : colors[initialProps.color] }}
    />
  );
}
