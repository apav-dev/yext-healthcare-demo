import { ComplexImageType, Image } from "@yext/pages/components";
import HStack from "./atoms/HStack";
import BodyText from "./atoms/BodyText";
import { Address as AddressType } from "../types/autogen";
import StarIcon from "./Icons/StarIcon";

export interface DoctorMapCardProps {
  name: string;
  address?: AddressType;
  specialty?: string;
  headshot?: ComplexImageType;
  slug?: string;
}

export default function DoctorMapCard({
  name,
  address,
  specialty,
  headshot,
  slug,
}: DoctorMapCardProps) {
  return (
    <div className="hidden bg-white rounded-md flex-col justify-center items-center p-4 lg:flex">
      {headshot && (
        <div className="h-[96px] w-[96px] flex justify-center rounded-full">
          <Image
            className="h-full w-full rounded-[inherit] object-cover"
            image={headshot}
          />
        </div>
      )}
      <a
        className="text-zinc-900 text-lg font-bold hover:underline"
        href={slug}
      >
        {name}
      </a>
      <p className="text-zinc-500 text-sm">{specialty}</p>
      <p className="text-zinc-500 text-sm">
        {address?.line1}, {address?.city}, {address?.region},{" "}
        {address?.postalCode}
      </p>
      <HStack classname="gap-x-1.5 flex justify-center">
        <StarIcon />
        <BodyText
          // TODO: replace with actual rating
          text={"4.5"}
          weight="Bold"
          color="yellow"
        />
      </HStack>
    </div>
  );
}
