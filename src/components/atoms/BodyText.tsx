import { twMerge } from "tailwind-merge";
export interface BodyTextProps {
  text: string;
  weight?: "Regular" | "Bold";
  color?:
    | "text-dark-gray"
    | "text-green"
    | "text-yellow"
    | "text-blue"
    | "text-disabled-gray";
  className?: string;
  size?: "sm" | "base";
}

export const initialProps: BodyTextProps = {
  text: "Header",
  weight: "Regular",
  color: "text-dark-gray",
  size: "base",
};

export default function BodyText({
  text,
  weight,
  color,
  className,
  size,
}: BodyTextProps) {
  return (
    <p
      className={twMerge(
        `text-base ${color} ${
          weight === "Bold" ? "font-sans-bold" : "font-sans-regular"
        } ${size ? "text-sm" : "text-base"}`,
        className
      )}
    >
      {text}
    </p>
  );
}
