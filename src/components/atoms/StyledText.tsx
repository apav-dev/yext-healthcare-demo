import { type VariantProps, cva } from "cva";
import { cn } from "../../utils";

const styledTextVariants = cva("font-sans", {
  variants: {
    color: {
      moss: "text-moss",
      sage: "text-sage",
      mint: "text-mint",
      leaf: "text-leaf",
    },
    size: {
      L: "text-lg leading-[27px]",
      M: "text-base leading-normal",
      S: "text-sm leading-normal",
      XS: "text-xs leading-normal",
    },
    weight: {
      Bold: ["font-bold"],
      SemiBold: ["font-medium"],
      Regular: ["font-regular"],
    },
    align: {
      Left: ["text-left"],
      Center: ["text-center"],
      Right: ["text-right"],
    },
    italic: {
      Yes: ["italic"],
      No: [""],
    },
    uppercase: {
      Yes: ["uppercase"],
      No: [""],
    },
  },
});

// export interface ParagraphVariants
//   extends VariantProps<typeof paragraphVariants> {}

// I wish that I could do this:
// export interface ParagraphProps extends ParagraphVariants {
//   StyledText?: string;
// }

// But I have to do this:
export interface StyledTextProps {
  /**
   * @displayName Text
   **/
  text?: string;
  /**
   * @displayName Size
   **/
  size?: "XS" | "S" | "M" | "L";
  /**
   * @displayName Weight
   **/
  weight?: "Regular" | "SemiBold" | "Bold";
  /**
   * @displayName Align
   **/
  align?: "Left" | "Center" | "Right";
  /**
   * @displayName Italic
   **/
  italic?: "Yes" | "No";
  /**
   * @displayName Uppercase
   **/
  uppercase?: "Yes" | "No";
  /**
   * @displayName Color
   **/
  color?: "moss" | "sage" | "mint" | "leaf";
  /**
   * @tooltip Used to override the default styles
   **/
  className?: string;
}

export const initialProps: StyledTextProps = {
  text: "Text goes here",
  size: "M",
  weight: "Regular",
  align: "Left",
  italic: "No",
  uppercase: "No",
  color: "moss",
  className: "",
};

const StyledText = ({
  text,
  size,
  weight,
  align,
  italic,
  uppercase,
  color,
  className,
}: StyledTextProps) => {
  return (
    <p
      className={cn(
        styledTextVariants({
          size,
          weight,
          align,
          italic,
          uppercase,
          color,
          className,
        })
      )}
    >
      {text}
    </p>
  );
};

export default StyledText;
