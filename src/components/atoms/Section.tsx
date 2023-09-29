import { cva } from "cva";
import { cn } from "../../utils";

const sectionVariants = cva("flex flex-col pt-8 pb-1 pr-28", {
  variants: {},
});

export interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cn(sectionVariants({ className }))}>{children}</section>
  );
};

export default Section;
