import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "./FacilityContent.css";
import RelatedProviderCard from "./RelatedProviderCard";
import FacilitySpecialtyCard from "./FacilitySpecialtyCard";

export default function FacilityContent({ description, specialties }) {
  return (
    <div className="flex w-[85%] px-20 gap-8 mt-8">
      <ScrollspyNav
        scrollTargetIds={["overview", "providers", "services"]}
        offset={-300}
        activeNavClass="is-active"
        scrollDuration="500"
      >
        <ul className="flex flex-col gap-2.5 w-fit text-base sticky top-40 h-fit">
          <li className="whitespace-nowrap flex">
            <a
              className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
              href="#overview"
            >
              <span>Overview</span>
            </a>
          </li>
          <li className="whitespace-nowrap flex">
            <a
              className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
              href="#providers"
            >
              <span>Healthcare Providers</span>
            </a>
          </li>
          <li className="whitespace-nowrap flex">
            <a
              className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
              href="#services"
            >
              <span>Services & Specialties</span>
            </a>
          </li>
          {/* <li className="whitespace-nowrap flex">
            <a
              className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
              href="#insurance"
            >
              <span>Insurance Accepted</span>
            </a>
          </li> */}
        </ul>
      </ScrollspyNav>

      <div className="flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-12" id="overview">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">Overview</h3>
          </div>
          <div className="text-neutral-500 text-base font-medium">
            {description}
          </div>
          <div className="text-neutral-500 text-base font-medium">
            {description}
          </div>
        </div>
        <div className="flex flex-col gap-12" id="providers">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">
              Healthcare Providers
            </h3>
          </div>
          <div className="grid gap-4 grid-cols-2 grid-row-2">
            <RelatedProviderCard />
            <RelatedProviderCard />
            <RelatedProviderCard />
            <RelatedProviderCard />
          </div>
        </div>
        <div className="flex flex-col gap-12" id="services">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">
              Services & Specialties
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-y-8 gap-x-24">
            {specialties &&
              specialties
                .slice(0, 12)
                .map((spec) => <FacilitySpecialtyCard specialty={spec} />)}
          </div>
        </div>
        {/* <div className="flex flex-col gap-12" id="insurance">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">Insurance Accepted</h3>
          </div>
          <div className="text-neutral-500 text-base font-medium">
            {description}
          </div>
          <div className="text-neutral-500 text-base font-medium">
            {description}
          </div>
        </div> */}
      </div>
    </div>
  );
}
