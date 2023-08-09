import { ComplexImageType, Image } from "@yext/pages/components";
import VStack from "../atoms/VStack";
import HStack from "../atoms/HStack";
import HeadingText from "../atoms/HeadingText";
// import Avatar from "../atoms/Avatar";
import BodyText from "../atoms/BodyText";
import Icon, { IconName } from "../atoms/Icon";
import { CardProps } from "@yext/search-ui-react";
import { Address as AddressType } from "../../types/autogen";
import Address from "../Address";
import HorizontalDivider from "../HoriztontalDivider";
import SpecialtyIcon from "../Icons/SpecialtyIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import LocationPinIcon from "../Icons/LocationPinIcon";
import StarIcon from "../Icons/StarIcon";

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
  address?: AddressType;
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
  const { name, address, taxonomy_relatedSpecialties, headshot, slug } =
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
              <div className="bg-black inline-flex h-[70px] w-[70px] select-none items-center justify-center overflow-hidden rounded-full align-middle lg:h-[139px] lg:w-[139px]">
                <Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  image={headshot}
                />
              </div>
            )}
            <HStack classname="gap-x-1.5 flex justify-center pt-4">
              <StarIcon />
              <BodyText
                // TODO: replace with actual rating
                text={"4.5"}
                weight="Bold"
                color="yellow"
              />
            </HStack>
          </VStack>
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                {/* <div className="w-[88px] h-3 bg-green-700"></div>
                 */}
                <HorizontalDivider />
                <a
                  className="text-zinc-900 text-2xl font-bold leading-[33.99px] hover:underline"
                  href={slug}
                >
                  {name}
                </a>
              </div>
              <div className="self-stretch h-[104px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch rounded-[999px] justify-start items-start gap-2 inline-flex">
                  <div className="w-6 h-6 p-1 justify-center items-center flex">
                    <div className="text-center text-neutral-500 text-base font-light">
                      <SpecialtyIcon />
                    </div>
                  </div>
                  <div className="text-zinc-900 text-xl font-normal">
                    {specialty}
                  </div>
                </div>
                <div className="self-stretch rounded-[999px] justify-start items-start gap-2 inline-flex">
                  <div className="w-6 h-6 p-1 justify-center items-center flex">
                    <div className="text-center text-neutral-500 text-base font-light">
                      <PhoneIcon />
                    </div>
                  </div>
                  <div className="text-zinc-900 text-xl font-normal">
                    212 - 212 - 3000
                  </div>
                </div>
                <div className="self-stretch rounded-[999px] justify-start items-start gap-2 inline-flex">
                  <div className="w-6 h-6 px-1.5 py-1 justify-center items-center flex">
                    <div className="text-center text-neutral-500 text-base font-light">
                      <LocationPinIcon />
                    </div>
                  </div>
                  {address && (
                    <div className="grow shrink basis-0 text-zinc-900 text-xl font-normal">
                      {`${address.line1}, ${address.city}, ${address.region}, ${address.postalCode}`}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </HStack>
      </HStack>
      <div className="flex justify-between bg-light-green px-6 py-[21px] lg:hidden">
        <BodyText text={"See Availability"} color="green" />
        <Icon name="chevron-right" color="text-green" />
      </div>
    </VStack>
  );
}
