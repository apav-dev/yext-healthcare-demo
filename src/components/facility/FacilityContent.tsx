import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "./FacilityContent.css";
import RelatedProviderCard from "./RelatedProviderCard";
import FacilitySpecialtyCard from "./BasicContentCard";
import BasicContentCard from "./BasicContentCard";
import Button from "./Button";

export default function FacilityContent({
  description,
  specialties,
  providers,
}) {
  return (
    <div className="flex xl:w-[95%] px-20 gap-8 mt-8">
      <ScrollspyNav
        scrollTargetIds={["overview", "providers", "services"]}
        offset={-300}
        activeNavClass="is-active"
        scrollDuration="500"
      >
        <ul className="flex flex-col gap-2.5 w-fit min-w-[200px] text-base sticky top-40 h-fit">
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
        </ul>
      </ScrollspyNav>

      <div className="flex flex-col gap-12 mb-20">
        <div className="flex flex-col gap-12" id="overview">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">Overview</h3>
          </div>
          <div className="text-neutral-500 text-base font-medium xl:pr-40">
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
          <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
            {providers.slice(0, 4).map((provider) => (
              <RelatedProviderCard provider={provider} />
            ))}
          </div>
          <Button color="primary" href="/doctor-finder">
            <span>Explore Providers</span>
          </Button>
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
              specialties.map((spec) => <BasicContentCard content={spec} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
