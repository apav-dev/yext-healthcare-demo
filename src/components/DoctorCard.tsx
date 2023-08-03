import { ComplexImageType } from "@yext/pages/components";
import HStack from "./atoms/HStack";
import VStack from "./atoms/VStack";
import HeadingText from "./atoms/HeadingText";
import BodyText from "./atoms/BodyText";
import Avatar from "./atoms/Avatar";
import Icon, { IconName } from "./atoms/Icon";
import { twMerge } from "tailwind-merge";

export interface DoctorCardProps {
  name?: string;
  specialty?: string;
  headshot?: ComplexImageType;
  rating?: number;
  containerClassname?: string;
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
  specialty,
  headshot,
  rating,
  containerClassname,
}: DoctorCardProps) {
  return (
    <VStack classname={twMerge("gap-y-9", containerClassname)}>
      <HStack>
        <HStack classname="gap-2.5">
          <Avatar image={headshot} />
          <VStack classname="py-2.5 gap-y-3">
            <VStack classname="gap-y-1">
              <HeadingText text={name ?? ""} level="Heading 3" />
              <BodyText text={specialty ?? ""} weight="Regular" color="green" />
            </VStack>
            <HStack classname="gap-x-1.5">
              <Icon name="star" color="text-yellow" height={"5"} width={"5"} />
              {rating && (
                <BodyText
                  text={rating.toString()}
                  weight="Bold"
                  color="yellow"
                />
              )}
            </HStack>
          </VStack>
        </HStack>
      </HStack>
      <div className="hidden px-2 sm:flex sm:justify-between">
        {sellingPoints.map((sellingPoint, i) => (
          <HStack key={`sp-${i}`}>
            <Icon name={sellingPoint.icon} classname="text-blue mr-2" />
            <VStack>
              <BodyText text={sellingPoint.name} color="blue" />
            </VStack>
          </HStack>
        ))}
      </div>
    </VStack>
  );
}
