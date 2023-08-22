import { Image as ImageComponent } from "@yext/sites-components";

type ImageType = {
  alternateText?: string;
  height: number;
  width: number;
  url: string;
};

export interface ImageProps {
  img: ImageType;
}

export default function Image({ img }: ImageProps) {
  return (
    <ImageComponent
      className="rounded-full"
      image={img}
      layout="fixed"
      height={210}
      width={210}
    />
  );
}
