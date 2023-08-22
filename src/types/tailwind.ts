export type TailwindSize =
  | "0"
  | "px"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

export type Color =
  | "light-green"
  | "green"
  | "dark-green"
  | "yellow"
  | "blue"
  | "dark-gray"
  | "light-gray"
  | "disabled-gray"
  | "white"
  | "black";

export const textColorMap: Record<Color, string> = {
  "light-green": "text-light-green",
  green: "text-green",
  "dark-green": "text-dark-green",
  yellow: "text-yellow",
  blue: "text-blue",
  "dark-gray": "text-zinc-900",
  "light-gray": "text-neutral-500",
  "disabled-gray": "text-disabled-gray",
  white: "text-white",
  black: "text-black",
};

export const tailwindHeight: Record<TailwindSize, string> = {
  "0": "h-0",
  px: "h-px",
  "0.5": "h-0.5",
  "1": "h-1",
  "1.5": "h-1.5",
  "2": "h-2",
  "2.5": "h-2.5",
  "3": "h-3",
  "3.5": "h-3.5",
  "4": "h-4",
  "5": "h-5",
  "6": "h-6",
  "7": "h-7",
  "8": "h-8",
  "9": "h-9",
  "10": "h-10",
  "11": "h-11",
  "12": "h-12",
  "14": "h-14",
  "16": "h-16",
  "20": "h-20",
  "24": "h-24",
  "28": "h-28",
  "32": "h-32",
  "36": "h-36",
  "40": "h-40",
  "44": "h-44",
  "48": "h-48",
  "52": "h-52",
  "56": "h-56",
  "60": "h-60",
  "64": "h-64",
  "72": "h-72",
  "80": "h-80",
  "96": "h-96",
};

export const tailwindWidth: Record<TailwindSize, string> = {
  "0": "w-0",
  px: "w-px",
  "0.5": "w-0.5",
  "1": "w-1",
  "1.5": "w-1.5",
  "2": "w-2",
  "2.5": "w-2.5",
  "3": "w-3",
  "3.5": "w-3.5",
  "4": "w-4",
  "5": "w-5",
  "6": "w-6",
  "7": "w-7",
  "8": "w-8",
  "9": "w-9",
  "10": "w-10",
  "11": "w-11",
  "12": "w-12",
  "14": "w-14",
  "16": "w-16",
  "20": "w-20",
  "24": "w-24",
  "28": "w-28",
  "32": "w-32",
  "36": "w-36",
  "40": "w-40",
  "44": "w-44",
  "48": "w-48",
  "52": "w-52",
  "56": "w-56",
  "60": "w-60",
  "64": "w-64",
  "72": "w-72",
  "80": "w-80",
  "96": "w-96",
};

export type TextSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

export const tailwindTextSize: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-3xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};
