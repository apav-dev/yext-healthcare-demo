import { cva } from "cva";
import { cn } from "../../utils";

const buttonVariants = cva(
  "rounded-[124px] border text-center inline-flex items-center justify-center text-base font-bold leading-normal px-6 py-4 min-w-[100px] h-11 disabled:bg-zinc-400 md:min-w-[148px] lg:min-w-[196px] lg:h-[50px]",
  {
    variants: {
      type: {
        Primary: "bg-sage border-sage text-white hover:bg-moss",
        Secondary: "bg-leaf border-leaf text-white hover:bg-sage",
        Outline:
          "bg-white border-sage text-sage hover:border-zinc-600 hover:text-zinc-600",
      },
    },
  }
);

export interface ButtonProps {
  /**
   * @displayName Text
   **/
  text?: string;
  /**
   * @displayName Type
   **/
  type?: "Primary" | "Secondary" | "Outline";
  /**
   * @tooltip Used to override the default styles
   */
  className?: string;
}

export const initialProps: ButtonProps = {
  text: "Button",
  type: "Primary",
  className: "",
};

const Button = ({ text, type, className }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ type, className }))}>{text}</button>
  );
};

export default Button;
