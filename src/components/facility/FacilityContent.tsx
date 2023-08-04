import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "./FacilityContent.css";

export default function FacilityContent({ description }) {
  return (
    <div className="flex w-[85%] px-20 gap-8 mt-8">
      <ScrollspyNav
        scrollTargetIds={["overview", "providers", "services", "insurance"]}
        offset={-200}
        activeNavClass="is-active"
        scrollDuration="500"
      >
        <ul className="flex flex-col w-fit font-sans-bold text-base sticky top-8 h-fit">
          <li className="whitespace-nowrap flex">
            <a
              className="w-full py-2 border-stone-300 pr-8 border-r hover:text-green"
              href="#overview"
            >
              <span>Overview</span>
            </a>
          </li>
          <li className="whitespace-nowrap flex">
            <a
              className="w-full py-2 border-stone-300 pr-8 border-r hover:text-green"
              href="#providers"
            >
              <span>Healthcare Providers</span>
            </a>
          </li>
          <li className="whitespace-nowrap flex">
            <a
              className="w-full py-2 border-stone-300 pr-8 border-r hover:text-green"
              href="#services"
            >
              <span>Services & Specialties</span>
            </a>
          </li>
          <li className="whitespace-nowrap flex">
            <a
              className="w-full py-2 border-stone-300 pr-8 border-r hover:text-green"
              href="#insurance"
            >
              <span>Insurance Accepted</span>
            </a>
          </li>
        </ul>
      </ScrollspyNav>

      <div className="flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-8" id="overview">
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular">Overview</h3>
          <BodyText text={description} />
          <BodyText text={description} />
        </div>
        <div className="flex flex-col gap-8" id="providers">
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular">Providers</h3>
          <BodyText text={description} />
          <BodyText text={description} />
        </div>
        <div className="flex flex-col gap-8" id="services">
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular">Services</h3>
          <BodyText text={description} />
          <BodyText text={description} />
        </div>
        <div className="flex flex-col gap-8" id="insurance">
          <div className="h-4 w-24 bg-[#3B8257]"></div>
          <h3 className="text-4xl font-sans-regular">Insurance</h3>
          <BodyText text={description} />
          <BodyText text={description} />
        </div>
      </div>
    </div>
  );
}
