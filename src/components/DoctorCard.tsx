// import { ComplexImageType } from "@yext/sites-components";
import HStack from "./atoms/HStack";
import VStack from "./atoms/VStack";
import HeadingText from "./atoms/HeadingText";
import BodyText from "./atoms/BodyText";
import Avatar from "./atoms/Avatar";
import Icon, { IconName } from "./atoms/Icon";
import { twMerge } from "tailwind-merge";
import { ImageType } from "../types/autogen";

export interface DoctorCardProps {
  name: string;
  specialty: string;
  headshot: ImageType;
  rating: number;
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
              <HeadingText text={name} level="Heading 3" />
              <BodyText
                text={specialty}
                weight="Regular"
                color="green"
                hexColor={"#4F6A4E"}
              />
            </VStack>
            <HStack classname="gap-x-1.5">
              <Icon
                name="star"
                color="yellow"
                height={"5"}
                width={"5"}
                hexColor={"#F0BB32"}
              />
              <BodyText
                text={rating.toString()}
                weight="Bold"
                color="yellow"
                hexColor={"#F0BB32"}
              />
            </HStack>
          </VStack>
        </HStack>
      </HStack>
      <div className="px-2 flex justify-between">
        {sellingPoints.map((sellingPoint, i) => (
          <HStack key={`sp-${i}`}>
            <Icon
              name={sellingPoint.icon}
              classname="text-blue mr-2"
              hexColor={"#2C99D6"}
            />
            <VStack>
              <BodyText
                text={sellingPoint.name}
                color="blue"
                hexColor={"#2C99D6"}
              />
            </VStack>
          </HStack>
        ))}
      </div>
    </VStack>
  );
}
