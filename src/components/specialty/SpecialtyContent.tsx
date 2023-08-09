import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "../facility/FacilityContent.css";
import RelatedProviderCard from "../facility/RelatedProviderCard";
import Button from "../facility/Button";
import InfoGridBanner from "../condition/InfoGridBanner";
import ArticlesSection from "./ArticlesSection";

interface SpecialtyContentProps {
  name: string;
  description: string;
  locations?: any;
  articles: any;
  conditions?: any;
  procedures?: any;
  visitReasons?: any;
  providers?: any;
}

export default function SpecialtyContent({
  name,
  description,
  locations,
  articles,
  conditions,
  providers,
  procedures,
  visitReasons,
}: SpecialtyContentProps) {
  const scrollIds = ["overview"];
  if (conditions) {
    scrollIds.push("conditions");
  }
  if (procedures) {
    scrollIds.push("procedures");
  }
  if (visitReasons) {
    scrollIds.push("visitReasons");
  }
  if (providers) {
    scrollIds.push("providers");
  }
  if (locations) {
    scrollIds.push("locations");
  }
  scrollIds.push("articles");

  return (
    <div className="flex w-[95%] px-20 gap-8 mt-8">
      <ScrollspyNav
        scrollTargetIds={scrollIds}
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
          {conditions && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#conditions"
              >
                <span>What We Treat</span>
              </a>
            </li>
          )}
          {procedures && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#procedures"
              >
                <span>Treatments We Offer</span>
              </a>
            </li>
          )}
          {visitReasons && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#visitReasons"
              >
                <span>Reasons To Visit</span>
              </a>
            </li>
          )}
          {providers && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#providers"
              >
                <span>Specialists</span>
              </a>
            </li>
          )}
          {locations && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#locations"
              >
                <span>Locations</span>
              </a>
            </li>
          )}
          <li className="whitespace-nowrap flex">
            <a
              className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
              href="#articles"
            >
              <span>Articles</span>
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
          <div className="text-neutral-500 text-base font-medium">
            {description}
          </div>
        </div>
        {conditions && (
          <div className="flex flex-col gap-12" id="conditions">
            <div className="flex flex-col gap-6">
              <div className="w-[88px] h-3 bg-green-700" />
              <h3 className="text-text-500 text-zinc-900">What We Treat</h3>
            </div>
            <p className="text-neutral-500 text-base font-medium flex flex-col gap-4">
              <ul className="grid grid-cols-2 gap-4">
                {conditions
                  ?.slice(0, 19)
                  .sort(function (a, b) {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return textA < textB ? -1 : textA > textB ? 1 : 0;
                  })
                  .map((condition) => (
                    <li key={condition.id}>
                      <a
                        className="hover:cursor-pointer hover:text-zinc-900 underline decoration-green-700 underline-offset-8"
                        href={`/${condition.slug}`}
                      >
                        {condition.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </p>
          </div>
        )}
        {procedures && (
          <div className="flex flex-col gap-12" id="procedures">
            <div className="flex flex-col gap-6">
              <div className="w-[88px] h-3 bg-green-700" />
              <h3 className="text-text-500 text-zinc-900">
                Treatments We Offer
              </h3>
            </div>
            <p className="text-neutral-500 text-base font-medium flex flex-col gap-4">
              <ul className="grid grid-cols-2 gap-4">
                {procedures
                  ?.slice(0, 19)
                  .sort(function (a, b) {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return textA < textB ? -1 : textA > textB ? 1 : 0;
                  })
                  .map((procedure) => (
                    <li key={procedure.id}>
                      <a
                        className="hover:cursor-pointer hover:text-zinc-900 underline decoration-green-700 underline-offset-8"
                        href={`/${procedure.slug}`}
                      >
                        {procedure.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </p>
          </div>
        )}
        {visitReasons && (
          <div className="flex flex-col gap-12" id="visitReasons">
            <div className="flex flex-col gap-6">
              <div className="w-[88px] h-3 bg-green-700" />
              <h3 className="text-text-500 text-zinc-900">Reasons To Visit</h3>
            </div>
            <p className="text-neutral-500 text-base font-medium flex flex-col gap-4">
              <ul className="grid grid-cols-2 gap-4">
                {visitReasons
                  ?.slice(0, 19)
                  .sort(function (a, b) {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return textA < textB ? -1 : textA > textB ? 1 : 0;
                  })
                  .map((reason) => (
                    <li key={reason.id}>
                      <a
                        className="hover:cursor-pointer hover:text-zinc-900 underline decoration-green-700 underline-offset-8"
                        href={`/${reason.slug}`}
                      >
                        {reason.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </p>
          </div>
        )}
        {providers && (
          <div className="flex flex-col gap-12" id="providers">
            <div className="flex flex-col gap-6">
              <div className="w-[88px] h-3 bg-green-700" />
              <h3 className="text-text-500 text-zinc-900">
                {`${name} Specialists`}
              </h3>
            </div>
            <div className="flex flex-col gap-12">
              <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                {providers.slice(0, 4).map((provider) => (
                  <RelatedProviderCard provider={provider} />
                ))}
              </div>
              <Button color="primary" href="/doctor-finder">
                <span>Explore Providers</span>
              </Button>
            </div>
          </div>
        )}
        {locations && (
          <div id="locations">
            <InfoGridBanner
              title="Locations"
              btnText="See More"
              content={locations}
              contentMax={9}
              btnLink="#"
            />
          </div>
        )}
        <div id="articles">
          <ArticlesSection articles={articles} />
        </div>
      </div>
    </div>
  );
}
