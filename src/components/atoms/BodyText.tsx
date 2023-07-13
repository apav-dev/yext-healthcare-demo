export interface BodyTextProps {
  text: string;
  weight?: "Regular" | "Bold";
  color?: "text-dark-gray" | "text-green" | "text-yellow" | "text-blue";
}

export const initialProps: BodyTextProps = {
  text: "Header",
  weight: "Regular",
  color: "text-dark-gray",
};

export default function BodyText({ text, weight, color }: BodyTextProps) {
  return (
    <p
      className={`text-base ${color} ${
        weight === "Bold" ? "font-sans-bold" : "font-sans-regular"
      }`}
    >
      {text}
    </p>
  );
}
