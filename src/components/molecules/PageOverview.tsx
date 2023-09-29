import Container from "../atoms/StudioContainer";
import Heading from "../atoms/Heading";
import StudioImage from "../atoms/StudioImage";
import StyledText from "../atoms/StyledText";
import Button from "../atoms/Button";

export interface PageOverviewProps {
  /**
   * @label Image
   */
  image?: {
    url: string;
    alt?: string;
  };
  /**
   * @label Heading Text
   */
  headingText?: string;
  /**
   * @label Body
   */
  body?: string;
  /**
   * @label Button Text
   */
  buttonText?: string;
}

export const initialProps: PageOverviewProps = {
  image: {
    url: "https://placehold.co/954x263",
    alt: "placeholder image",
  },
  headingText: "Heading Text goes here",
  body: "text goes here",
};

const PageOverview = ({ image, headingText, body }: PageOverviewProps) => {
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
      <Button
        className="max-w-[250px]"
        text="Pay My Bill Online"
        type="Primary"
      />
    </Container>
  );
};

export default PageOverview;
