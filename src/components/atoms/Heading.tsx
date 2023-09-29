import { cva } from "cva";
import { cn } from "../../utils";

const headingVariants = cva("text-moss", {
  variants: {
    rank: {
      "1": "text-[40px] leading-[56px] font-serif-regular",
      "2": "text-[32px] leading-[44.8px] font-serif-medium",
      "3": "text-2xl leading-[33.6px] font-semibold font-sans",
    },
    align: {
      Left: "text-left",
      Center: "text-center",
      Right: "text-right",
    },
  },
});

export interface HeadingProps {
  /**
   * @tooltip Content of the heading
   * @displayName Text
   */
  text: string;
  /**
   * @tooltip Defines whether the heading is an h1, h2, or h3.
   * @displayName Rank
   */
  rank?: "1" | "2" | "3";
  /**
   * @displayName Text Align
   */
  align?: "Left" | "Center" | "Right";
  /**
   * @tooltip Used to override the default styles
   */
  className?: string;
}

export const initialProps: HeadingProps = {
  text: "Heading Text",
  rank: "1",
  align: "Left",
  className: "",
};

const Heading = ({ text, rank, className, align }: HeadingProps) => {
  const Tag: any = rank ? `h${rank}` : "span";

  return (
    <Tag className={cn(headingVariants({ rank, align, className }))}>
      {text}
    </Tag>
  );
};

export default Heading;
