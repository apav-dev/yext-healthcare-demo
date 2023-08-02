import { twMerge } from "tailwind-merge";
import { Color, textColorMap } from "../../types/tailwind";
import { HexColor } from "@yext/studio";

export interface BodyTextProps {
  text: string;
  weight?: "Regular" | "Bold";
  color?: Color;
  className?: string;
  size?: "sm" | "base";
  hexColor?: HexColor;
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
  hexColor,
}: BodyTextProps) {
  const textColor = textColorMap[color ?? "dark-gray"];

  return (
    <p
      className={twMerge(
        `text-base ${textColor} ${
          weight === "Bold" ? "font-sans-bold" : "font-sans-regular"
        } ${size ? "text-sm" : "text-base"}`,
        className
      )}
      style={{
        color: hexColor,
        fontWeight: weight === "Bold" ? 700 : 400,
        fontSize: size === "sm" ? "16px" : "18px",
      }}
    >
      {text}
    </p>
  );
}
