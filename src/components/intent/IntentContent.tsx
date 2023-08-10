import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "../facility/FacilityContent.css";
import RelatedProviderCard from "../facility/RelatedProviderCard";
import Button from "../facility/Button";
import InfoGridBanner from "../condition/InfoGridBanner";
import { filter } from "lodash";

interface IntentContentProps {
  name: string;
  description: string;
  locations?: any;
  conditions?: any;
  procedures?: any;
  providers?: any;
  providerHeader?: string;
  cityName?: string;
}

export default function IntentContent({
  name,
  description,
  locations,
  conditions,
  providers,
  procedures,
  providerHeader,
  cityName,
}: IntentContentProps) {
  const scrollIds = ["overview"];
  if (conditions) {
    scrollIds.push("conditions");
  }
  if (procedures) {
    scrollIds.push("procedures");
  }
  if (providers) {
    scrollIds.push("providers");
  }
  if (locations) {
    scrollIds.push("locations");
  }

  
  const filteredLocations = locations?.filter(
    (location) => location.id.includes("facility")
  );

  const filteredProviders = providers?.filter(
    (provider) => provider.id.includes("provider")
  );

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
                <span>Services We Offer</span>
              </a>
            </li>
          )}
          {filteredProviders && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#providers"
              >
                <span>Providers</span>
              </a>
            </li>
          )}
          {filteredLocations && (
            <li className="whitespace-nowrap flex">
              <a
                className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
                href="#locations"
              >
                <span>Locations</span>
              </a>
            </li>
          )}
        </ul>
      </ScrollspyNav>

      <div className="flex flex-col gap-12 mb-20">
        <div className="flex flex-col gap-12" id="overview">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">{`About ${name}`}</h3>
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
                 Services We Offer
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
        {filteredProviders && (
          <div className="flex flex-col gap-12" id="providers">
            <div className="flex flex-col gap-6">
              <div className="w-[88px] h-3 bg-green-700" />
              <h3 className="text-text-500 text-zinc-900">
                {`${providerHeader}`}
              </h3>
            </div>
            <div className="flex flex-col gap-12">
              <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                {filteredProviders.slice(0, 4).map((provider) => (
                  <RelatedProviderCard provider={provider} />
                ))}
              </div>
              <Button color="primary" href="/doctor-finder">
                <span>Explore Providers</span>
              </Button>
            </div>
          </div>
        )}
        {filteredLocations && (
          <div id="locations">
            <InfoGridBanner
              title={`Locations in ${cityName}`}
              btnText="See More"
              content={filteredLocations}
              contentMax={9}
              btnLink="#"
            />
          </div>
        )}
      </div>
    </div>
  );
}
