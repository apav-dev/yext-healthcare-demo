import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "../facility/FacilityContent.css";
import RelatedProviderCard from "../facility/RelatedProviderCard";
import Button from "../facility/Button";

export default function ConditionContent({
  name,
  description,
  diagnostics,
  treatments,
}) {
  return (
    <div className="flex w-[85%] px-20 gap-8 mt-8">
      <ScrollspyNav
        scrollTargetIds={["overview", "diagnostics", "treatments"]}
        offset={-300}
        activeNavClass="is-active"
        scrollDuration="500"
      >
        <ul className="flex flex-col gap-2.5 w-fit min-w-[200px] text-base sticky top-40 h-fit mb-20">
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
              href="#diagnostics"
            >
              <span>Diagnostic Procedures</span>
            </a>
          </li>
          <li className="whitespace-nowrap flex">
            <a
              className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
              href="#treatments"
            >
              <span>Treatments</span>
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
        </div>
        <div className="flex flex-col gap-12" id="diagnostics">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">
              Diagnostic Procedures
            </h3>
          </div>
          <p className="text-neutral-500 text-base font-medium flex flex-col gap-4">
            <span>{`Our specialists provide the following diagnostic procedures for ${name}:`}</span>
            <ul className="list-disc flex flex-col gap-4 list-inside">
              {diagnostics?.map((diag) => (
                <li key={diag.id}>{diag.name}</li>
              ))}
            </ul>
          </p>
        </div>
        <div className="flex flex-col gap-12" id="treatments">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">Treatments</h3>
          </div>
          <p className="text-neutral-500 text-base font-medium flex flex-col gap-4">
            <span>{`Treatment for ${name} may include the following:`}</span>
            <ul className="list-disc flex flex-col gap-4 list-inside">
              {treatments?.map((treat) => (
                <li key={treat.id}>{treat.name}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
