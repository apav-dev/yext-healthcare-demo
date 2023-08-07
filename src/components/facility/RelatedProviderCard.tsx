import { StarFilledIcon } from "@radix-ui/react-icons";
import StarIcon from "../Icons/StarIcon";
import CalendarIcon from "./CalendarIcon";
import ClockIcon from "./ClockIcon";

export default function RelatedProviderCard() {
  return (
    <div className="p-8 bg-white rounded-2xl border border-stone-300 justify-start items-start gap-8 inline-flex">
      <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
        <img
          className="w-28 h-28 relative rounded-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/68bf/13ba/8c1baf06d86211387cd23490dca8a5b0?Expires=1691971200&Signature=aGBJjS6thL2Lq5B-ezOgH61JLKlPQI~eLZWzMAcDdUKq0NwMhGpg~iJmZWeoygnmcWav7mWnX2Nl2NICpo7hcLZS-FSoYh2cvc4Om-ZGOF3hSFIsmYA6AzB4DjKFPx3s~PgnLFsRkztfKHw3Jk0xnyBVKf3KtzRmIpw2eZqUnWDlNregEDfL8wzjAeKEWetC3-dIVamS1Blx9xtZ9PWtENBZs1b7dHqYkTGLj-4Tz~SUB1Aa-iT4mbntFS5uvIvCbbtspbIhdLq08Xfp~J~RKUCo2CA1XhBYrVtJevivGmclsJc4vmnxKl8ZLeMO4ON4IW4XOLNdJ-8T19d~1V-C7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div className="rounded-full justify-start items-center gap-2 inline-flex">
          <StarFilledIcon color="#F0BB32" />
          <div className="text-zinc-900 text-xl font-bold">4.5</div>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="w-[88px] h-3 bg-green-700" />
          <div className="self-stretch text-zinc-900 text-2xl font-bold leading-loose">
            Dr. Mary Johnson
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch rounded-full justify-start items-center gap-2 inline-flex">
            <ClockIcon />
            <div className=" text-xl font-normal">Ophthalmologist</div>
          </div>
        </div>
        <div className="px-4 py-2 rounded-full border border-green-700 justify-center items-center gap-2 inline-flex">
          <CalendarIcon color={"#1A1A1A"} />
          <div className="text-center text-zinc-900 text-base font-bold leading-normal">
            Schedule
          </div>
        </div>
      </div>
    </div>
  );
}
