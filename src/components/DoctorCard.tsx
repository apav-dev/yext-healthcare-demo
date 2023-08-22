import { Image } from "@yext/sites-components";
import HStack from "./atoms/HStack";
import VStack from "./atoms/VStack";
import HeadingText from "./atoms/HeadingText";
import BodyText from "./atoms/BodyText";
import Avatar from "./atoms/Avatar";
import Icon, { IconName } from "./atoms/Icon";
import { twMerge } from "tailwind-merge";
import { Address } from "../types/autogen";
import SpecialtyIcon from "./Icons/SpecialtyIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import LocationPinIcon from "./Icons/LocationPinIcon";
import StarIcon from "./Icons/StarIcon";
import HorizontalDivider from "./HoriztontalDivider";
import CalendarIcon from "./Icons/CalendarIcon";
import Button from "./atoms/Button";

type ImageType = {
  alternateText?: string;
  height: number;
  width: number;
  url: string;
};

export interface DoctorCardProps {
  name?: string;
  specialtyName?: string;
  specialtySlug?: string;
  headshot?: ImageType;
  rating?: number;
  containerClassname?: string;
  address: Address;
}

const sellingPoints: { icon: IconName; name: string }[] = [
  {
    icon: "hand",
    name: "Loyal Patients",
  },
  {
    icon: "star",
    name: "Highly Recommended",
  },
];

export default function DoctorCard({
  name,
  specialtyName,
  specialtySlug,
  headshot,
  rating,
  containerClassname,
  address,
}: DoctorCardProps) {
  return (
    <HStack classname="justify-start items-center gap-8">
      <VStack classname="justify-start items-center gap-4">
        {headshot && (
          <Image
            className="rounded-full"
            image={headshot}
            layout="fixed"
            height={210}
            width={210}
          />
        )}
        <HStack classname="justify-center items-center gap-2">
          <StarIcon />
          <div className="text-zinc-900 text-xl font-bold">4.5</div>
        </HStack>
      </VStack>
      <VStack classname="justify-start items-start gap-6">
        <HorizontalDivider />
        <HeadingText
          level="Heading 2"
          classname="text-zinc-900 text-[52px] font-medium leading-[56px]"
          text={name || ""}
        />
        <HStack classname="items-center gap-2">
          <SpecialtyIcon />
          <BodyText text={specialtyName || ""} size="xl" />
        </HStack>
        <HStack classname="items-center gap-2">
          <PhoneIcon />
          <BodyText text="212 - 212 - 3000" size="xl" />
        </HStack>
        <HStack classname="items-center gap-2">
          <LocationPinIcon />
          <BodyText
            text={`${address.line1}, ${address.city}, ${address.region}, ${address.postalCode}`}
            size="xl"
          />
        </HStack>
        <Button type="primary">
          <CalendarIcon />
          <BodyText size="base" text="Schedule an Appointment" />
        </Button>
      </VStack>
    </HStack>
  );
}
