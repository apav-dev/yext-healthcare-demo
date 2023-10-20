import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "../facility/FacilityContent.css";
import RelatedProviderCard from "../facility/RelatedProviderCard";
import Button from "../facility/Button";
import { isArray } from "lodash";
import InfoGridBanner from "./InfoGridBanner";

export default function ConditionContent({ name, description, specialties }) {
  let fullProcedureList: any[] = [];
  {
    specialties &&
      specialties.forEach((spec) => {
        const procedures = spec.taxonomy_relatedProcedures;
        if (procedures) {
          fullProcedureList = [...fullProcedureList, ...procedures];
        }
      });
  }
  const scrollIds = ["overview"];
  if (fullProcedureList.length > 0) {
    scrollIds.push("procedures");
  }
  if (specialties) {
    scrollIds.push("specialties");
  }
  return (
    <div className="flex w-[85%] px-20 gap-8 mt-8">
      <ScrollspyNav
        scrollTargetIds={scrollIds}
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
          {fullProcedureList.length > 0 && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#procedures"
              >
                <span>Procedures We Offer</span>
              </a>
            </li>
          )}
          {specialties && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#specialties"
              >
                <span>Related Specialties</span>
              </a>
            </li>
          )}
        </ul>
      </ScrollspyNav>

      <div className="flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-12" id="overview">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-primary-green" />
            <h3 className="text-text-500 text-zinc-900">Overview</h3>
          </div>
          <div className="text-neutral-500 text-base font-medium">
            {description}
          </div>
        </div>
        {fullProcedureList.length > 0 && (
          <div className="flex flex-col gap-12" id="procedures">
            <div className="flex flex-col gap-6">
              <div className="w-[88px] h-3 bg-primary-green" />
              <h3 className="text-text-500 text-zinc-900">
                Procedures We Offer
              </h3>
            </div>
            <p className="text-neutral-500 text-base font-medium flex flex-col gap-4">
              <span>{`Veridian offers the following procedures related to ${name}:`}</span>
              <ul className="grid grid-cols-2 gap-4">
                {fullProcedureList?.slice(0, 29).map((proc) => (
                  <li
                    className="underline decoration-primary-green underline-offset-8"
                    key={proc.id}
                  >
                    {proc.name}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        )}
        {specialties && (
          <div id="specialties">
            <InfoGridBanner
              title="Related Specialties"
              btnText=""
              content={specialties}
              contentMax={9}
              btnLink=""
              showButton={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
