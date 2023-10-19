import { ComplexImageType, Image } from "@yext/sites-components";

export interface PhotoHeroProps {
  image?: ComplexImageType;
  children?: React.ReactNode;
}

export default function PhotoHero({ image, children }: PhotoHeroProps) {
  return (
    <section aria-labelledby="cause-heading">
      <div className="relative bg-gray-800 h-[600px] min-h-fit">
        <div className="absolute inset-0 overflow-hidden bg-center">
          {image && (
            <Image image={image} layout="fill"  />
          )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative mx-auto my-auto flex max-w-3xl flex-col items-center text-center px-6 py-32 sm:px-12  lg:px-16">
          {children}
        </div>
      </div>
    </section>
  );
}
