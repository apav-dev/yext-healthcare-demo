export interface HeadingTextProps {
  text: string;
  level: "Heading 1" | "Heading 2" | "Heading 3" | "Heading 4";
}

export const initialProps: HeadingTextProps = {
  text: "Header",
  level: "Heading 1",
};

export default function HeadingText({ level, text }: HeadingTextProps) {
  switch (level) {
    case "Heading 1":
      return <h1 className="text-3xl font-serif-bold">{text}</h1>;
    case "Heading 2":
      return <h2 className="text-2xl font-serif-bold">{text}</h2>;
    case "Heading 3":
      return <h3 className="text-xl font-serif-bold">{text}</h3>;
    case "Heading 4":
      return <h4 className="text-lg font-serif-bold">{text}</h4>;
  }
}
