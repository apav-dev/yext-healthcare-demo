import { twMerge } from "tailwind-merge";
import {
  Color,
  textColorMap,
  TextSize,
  tailwindTextSize,
} from "../../types/tailwind";
export interface BodyTextProps {
  text: string;
  weight?: "Regular" | "Bold";
  color?: Color;
  className?: string;
  size?: TextSize;
}

export const initialProps: BodyTextProps = {
  text: "Header",
  weight: "Regular",
  color: "dark-gray",
  size: "base",
};

export default function BodyText({
  text,
  weight,
  color,
  className,
  size,
}: BodyTextProps) {
  const textColor = textColorMap[color ?? "dark-gray"];
  const textSize = tailwindTextSize[size ?? "base"];

  return (
    <p
      className={twMerge(
        `text-base ${textColor} ${
          weight === "Bold" ? "font-bold" : "font-regular"
        } ${textSize}`,
        className
      )}
    >
      {text}
    </p>
  );
}
