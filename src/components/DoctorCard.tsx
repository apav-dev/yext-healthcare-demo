import { ComplexImageType, ImageType } from "@yext/pages/components";
import HStack from "./atoms/HStack";
import VStack from "./atoms/VStack";
import HeadingText from "./atoms/HeadingText";
import BodyText from "./atoms/BodyText";
import Avatar from "./atoms/Avatar";
import Icon, { IconName } from "./atoms/Icon";
import GridContainer from "./atoms/GridContainer";
import { twMerge } from "tailwind-merge";

export interface DoctorCardProps {
  name: string;
  specialty: string;
  headshot: ComplexImageType | ImageType;
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
              <BodyText text={specialty} weight="Regular" color="text-green" />
            </VStack>
            <HStack classname="gap-x-1.5">
              <Icon name="star" color="yellow" height={5} width={5} />
              <BodyText
                text={rating.toString()}
                weight="Bold"
                color="text-yellow"
              />
            </HStack>
          </VStack>
        </HStack>
      </HStack>
      <GridContainer
        backgroundColor="#ffffff"
        rowCount={2}
        columnCount={2}
        // columnGap="0"
        // rowGap="6"
      >
        <div className="hidden sm:flex">
          {sellingPoints.map((sellingPoint, i) => (
            <HStack key={`sp-${i}`}>
              <Icon name={sellingPoint.icon} classname="text-blue" />
              <VStack>
                <BodyText
                  text={sellingPoint.name}
                  className="text-blue"
                  // fontWeight="semibold"
                  // textColor="#111827"
                />
                {/* <BodyText texts={sellingPoint.description} /> */}
              </VStack>
            </HStack>
          ))}
        </div>
      </GridContainer>
    </VStack>
  );
}
