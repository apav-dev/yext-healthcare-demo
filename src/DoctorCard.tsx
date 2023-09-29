import { ComplexImageType, Image } from "@yext/sites-components";
import HStack from "../atoms/HStack";
import VStack from "../atoms/VStack";
import HeadingText from "../atoms/HeadingText";
import BodyText from "../atoms/BodyText";
import Avatar from "../atoms/Avatar";
import Icon, { IconName } from "../atoms/Icon";
import { twMerge } from "tailwind-merge";
import { Address } from "../types/autogen";
import SpecialtyIcon from "./Icons/SpecialtyIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import LocationPinIcon from "./Icons/LocationPinIcon";
import StarIcon from "./Icons/StarIcon";
import HorizontalDivider from "./HoriztontalDivider";
import CalendarIcon from "./Icons/CalendarIcon";

export interface DoctorCardProps {
  name?: string;
  specialtyName?: string;
  specialtySlug?: string;
  headshot?: ComplexImageType;
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
    <div className="justify-start items-center gap-8 inline-flex">
      <div className="flex-col justify-start items-center gap-4 inline-flex">
        {headshot && (
          <Image
            className="rounded-full"
            image={headshot}
            layout="fixed"
            height={210}
            width={210}
          />
        )}
        <div className="rounded-[999px] justify-start items-start gap-2 inline-flex">
          <div className="w-6 h-6 px-[3px] py-1 justify-center items-center flex">
            <div className="text-center text-amber-400 text-base font-black">
              <StarIcon />
            </div>
          </div>
          <div className="w-[41px] text-zinc-900 text-xl font-bold">4.5</div>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[84px] flex-col justify-start items-start gap-4 flex">
              {/* <div className="w-[88px] h-3 bg-green-700"></div>
               */}
              <HorizontalDivider />
              <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
                {name}
              </div>
            </div>
            <div className="self-stretch h-[104px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch rounded-[999px] justify-start items-start gap-2 inline-flex">
                <div className="w-6 h-6 p-1 justify-center items-center flex">
                  <div className="text-center text-neutral-500 text-base font-light">
                    <SpecialtyIcon />
                  </div>
                </div>
                <div className="text-zinc-900 text-xl font-normal">
                  <a
                    href={`/${specialtySlug}`}
                    className="hover:text-green-700"
                  >
                    {specialtyName}
                  </a>
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
                <div className="grow shrink basis-0 text-zinc-900 text-xl font-normal">
                  {`${address.line1}, ${address.city}, ${address.region}, ${address.postalCode}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-green-700 rounded-[999px] border border-green-700 justify-center items-center gap-2 inline-flex">
          <div className="w-6 h-6 px-[5px] py-1 justify-center items-center flex">
            <div className="text-center text-white text-base font-light">
              <CalendarIcon />
            </div>
          </div>
          <div className="text-center text-white text-base font-bold leading-normal">
            Schedule an Appointment
          </div>
        </div>
      </div>
    </div>
  );
}
