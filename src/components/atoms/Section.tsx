import { twMerge } from "tailwind-merge";
import HeadingText from "./HeadingText";
import CenteredContainer from "./CenteredContainer";
import { HexColor } from "@yext/studio";

export interface SectionProps {
  children?: React.ReactNode;
  outerContainerClassname?: string;
  innerContainerClassname?: string;
  title?: string;
  backgroundColor?: HexColor;
}

export const initialProps: SectionProps = {
  title: "Section Title",
  backgroundColor: "#ffffff",
};

export default function Section({
  children,
  outerContainerClassname,
  innerContainerClassname,
  title,
  backgroundColor,
}: SectionProps) {
  return (
    <section
      className={twMerge(`py-14`, outerContainerClassname)}
      style={{
        backgroundColor,
      }}
    >
      <CenteredContainer
        classname={twMerge(`max-w-5xl`, innerContainerClassname)}
      >
        {title && (
          <HeadingText text={title} level="Heading 2" classname="pb-16" />
        )}
        {children}
      </CenteredContainer>
    </section>
  );
}
