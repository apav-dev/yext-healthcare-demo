import LocationPinIcon from "../Icons/LocationPinIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import SpecialtyIcon from "../Icons/SpecialtyIcon";
import StarIcon from "../Icons/StarIcon";
import CalendarIcon from "../facility/CalendarIcon";
import ClockIcon from "../facility/ClockIcon";

export default function RelatedProviderCardFull({ provider }) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-stone-300 justify-start items-start gap-8 inline-flex">
      <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
        <img
          className="w-28 h-28 relative rounded-full object-cover"
          src={provider.headshot?.url}
        />
        <div className="rounded-full justify-start items-center gap-2 inline-flex">
          <StarIcon />
          <div className="text-zinc-900 text-xl font-bold">4.5</div>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="w-[88px] h-3 bg-primary-green" />
          <a
            href={`/${provider.slug}`}
            className="self-stretch text-zinc-900 text-2xl font-bold hover:underline"
          >
            {provider.name}
          </a>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch rounded-full justify-start items-center gap-2 inline-flex">
            <SpecialtyIcon />
            <div className=" text-xl font-normal">
              {provider.taxonomy_relatedSpecialties[0].name}
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-[999px] justify-start items-start gap-2 inline-flex">
          <div className="w-6 h-6 px-1.5 py-1 justify-center items-center flex">
            <div className="text-center text-neutral-500 text-base font-light">
              <LocationPinIcon />
            </div>
          </div>
          <div className="grow shrink basis-0 text-zinc-900 text-xl font-normal">
            {`${provider.address.line1}, ${provider.address.city}, ${provider.address.region}, ${provider.address.postalCode}`}
          </div>
        </div>
        <div className="self-stretch rounded-[999px] justify-start items-start gap-2 inline-flex">
          <div className="w-6 h-6 p-1 justify-center items-center flex">
            <div className="text-center text-neutral-500 text-base font-light">
              <PhoneIcon />
            </div>
          </div>
          <div className="text-zinc-900 text-xl font-normal">
            {provider.mainPhone}
          </div>
        </div>
        <a
          href={`/${provider.slug}`}
          className="px-4 py-2 rounded-full border border-primary-green justify-center items-center gap-2 inline-flex"
        >
          <CalendarIcon color={"#1A1A1A"} />
          <button className="text-center text-zinc-900 text-base font-bold leading-normal">
            Schedule
          </button>
        </a>
      </div>
    </div>
  );
}
