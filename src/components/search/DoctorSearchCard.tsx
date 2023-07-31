import { ComplexImageType, Image } from "@yext/pages/components";
import VStack from "../atoms/VStack";
import HStack from "../atoms/HStack";
import HeadingText from "../atoms/HeadingText";
// import Avatar from "../atoms/Avatar";
import BodyText from "../atoms/BodyText";
import Icon, { IconName } from "../atoms/Icon";
import { CardProps } from "@yext/search-ui-react";
import { Address } from "../../types/autogen";

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

// TODO: replace with generated type
export interface HealthPro {
  id: string;
  name: string;
  address?: Address;
  taxonomy_relatedSpecialties: {
    name: string;
  }[];
  headshot?: ComplexImageType;
  geocodedCoordinate?: {
    latitude: number;
    longitude: number;
  };
}

export default function DoctorCard({ result }: CardProps<HealthPro>) {
  const { name, address, taxonomy_relatedSpecialties, headshot } =
    result.rawData;
  const specialty = taxonomy_relatedSpecialties[0].name;
  const city = address?.city;

  return (
    <VStack classname="border rounded shadow bg-white">
      <HStack classname="p-6">
        <HStack classname="gap-6">
          <VStack>
            {/* <Avatar image={headshot} /> */}
            {headshot && (
              <div className="bg-black inline-flex h-[70px] w-[70px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  image={headshot}
                />
              </div>
            )}
            <HStack classname="gap-x-1.5 flex justify-center">
              <Icon name="star" color="text-yellow" height={"5"} width={"5"} />
              <BodyText
                // TODO: replace with actual rating
                text={"4.5"}
                weight="Bold"
                color="text-yellow"
              />
            </HStack>
          </VStack>
          <VStack classname="gap-y-3">
            <VStack classname="gap-y-1">
              <HeadingText text={name} level="Heading 4" />
              <BodyText text={specialty} weight="Regular" color="text-green" />
              <BodyText
                text={city ?? ""}
                weight="Regular"
                color="text-light-gray"
              />
            </VStack>
          </VStack>
        </HStack>
      </HStack>
      <div className="hidden px-2 sm:flex sm:justify-between">
        {sellingPoints.map((sellingPoint, i) => (
          <HStack key={`sp-${i}`}>
            <Icon name={sellingPoint.icon} classname="text-blue mr-2" />
            <VStack>
              <BodyText text={sellingPoint.name} className="text-blue" />
            </VStack>
          </HStack>
        ))}
      </div>
      <div className="flex justify-between bg-light-green px-6 py-[21px]">
        <BodyText text={"See Availability"} color="text-green" />
        <Icon name="chevron-right" color="text-green" />
      </div>
    </VStack>
  );
}
