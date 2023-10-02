import Container from "../atoms/StudioContainer";
import Heading from "../atoms/Heading";
import StudioImage from "../atoms/StudioImage";
import StyledText from "../atoms/StyledText";
import Button from "../atoms/Button";

export interface PageOverviewProps {
  /**
   * @displayName Image
   */
  image?: {
    url: string;
    alt?: string;
  };
  /**
   * @displayName Heading Text
   */
  headingText?: string;
  /**
   * @displayName Body
   */
  body?: string;
  /**
   * @displayName Button Text
   */
  ctaText?: string;
}

export const initialProps: PageOverviewProps = {
  image: {
    url: "https://placehold.co/954x263",
    alt: "placeholder image",
  },
  headingText: "Heading Text goes here",
  body: "text goes here",
  ctaText: "Pay My Bill Online",
};

const PageOverview = ({
  image,
  headingText,
  body,
  ctaText,
}: PageOverviewProps) => {
  return (
    <Container
      layout="column"
      paddingTop="64px"
      paddingBottom="64px"
      paddingLeft="48px"
      paddingRight="48px"
      className="pb-3 gap-y-8"
    >
      <StudioImage
        className="max-h-[263px]"
        aspectRatio="16:10"
        image={image}
      />
      <Heading rank="1" text={headingText ?? ""} />
      <StyledText color="moss" text={body} />
      <Button className="max-w-[250px]" text={ctaText ?? ""} type="Primary" />
    </Container>
  );
};

export default PageOverview;
