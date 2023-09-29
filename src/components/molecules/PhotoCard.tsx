import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import StudioImage from "../atoms/StudioImage";
import StyledText from "../atoms/StyledText";

export interface PhotoCardProps {
  image?: {
    url: string;
    alt?: string;
  };
  title?: string;
  description?: string;
  ctaText?: string;
}

const PhotoCard = ({ image, title, description, ctaText }: PhotoCardProps) => {
  return (
    <div className=" p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-center gap-4 inline-flex">
      <StudioImage className="max-w-[394px] h-[168px]" image={image} />
      <Heading rank="3" text={title ?? ""} />
      <StyledText text={description} size="S" />
      <Button text={ctaText} type="Outline" />
    </div>
  );
};

export default PhotoCard;
