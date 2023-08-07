import { useRef, useState } from "react";
import BodyText from "../atoms/BodyText";
import ScrollspyNav from "react-scrollspy-nav";
import "../facility/FacilityContent.css";
import RelatedProviderCard from "../facility/RelatedProviderCard";
import Button from "../facility/Button";
import InfoGridBanner from "../condition/InfoGridBanner";
import ArticlesSection from "./ArticlesSection";

export default function SpecialtyContent({
  name,
  description,
  locations,
  articles,
}) {
  return (
    <div className="flex w-[95%] px-20 gap-8 mt-8">
      <ScrollspyNav
        scrollTargetIds={["overview", "providers", "locations", "articles"]}
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
              <span>Specialists</span>
            </a>
          </li>
          <li className="whitespace-nowrap flex">
            <a
              className="w-full text-base font-bold text-zinc-900 hover:text-neutral-500 pb-2"
              href="#locations"
            >
              <span>Locations</span>
            </a>
          </li>
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
        <div className="flex flex-col gap-12" id="providers">
          <div className="flex flex-col gap-6">
            <div className="w-[88px] h-3 bg-green-700" />
            <h3 className="text-text-500 text-zinc-900">
              {`${name} Specialists`}
            </h3>
          </div>
          <div className="flex flex-col gap-12">
            <div className="grid gap-4  grid-cols-1 xl:grid-cols-2 grid-row-2">
              <RelatedProviderCard
                provider={{
                  name: "Adrian Harvey Mass, MD",
                  headshot: {
                    url: "https://a.mktgcdn.com/p/u8ugfM5UFs_lDO2tOZWUa1BKfITS0lMLv81NpcqseUk/400x400.jpg",
                  },
                  taxonomy_relatedSpecialties: [{ name }],
                }}
              />
              <RelatedProviderCard
                provider={{
                  name: "Ismary DeCastro",
                  headshot: {
                    url: "https://a.mktgcdn.com/p/ZFkuxpBwjFPjALS5Gh5ZN9vUcRx_Hs2AkNlwbaCn5jo/400x400.jpg",
                  },
                  taxonomy_relatedSpecialties: [{ name }],
                }}
              />
              <RelatedProviderCard
                provider={{
                  name: "Melissa Cadnapaphornchai",
                  headshot: {
                    url: "https://a.mktgcdn.com/p/W2r9w9CSm22-9fscvms7PV69I3dUB_bQl_ewiKvdSpY/400x400.jpg",
                  },
                  taxonomy_relatedSpecialties: [{ name }],
                }}
              />
              <RelatedProviderCard
                provider={{
                  name: "Neelima Katragadda, MD",
                  headshot: {
                    url: "https://a.mktgcdn.com/p/xN51Lz6iOkM2_bshFK0QAwK4VdDeRxr7qWi2xhTzx5g/400x400.jpg",
                  },
                  taxonomy_relatedSpecialties: [{ name }],
                }}
              />
            </div>
            <Button color="primary" href="/doctor-finder">
              <span>Explore Providers</span>
            </Button>
          </div>
        </div>
        <div id="locations">
          <InfoGridBanner
            title="Locations"
            btnText="See More"
            content={locations}
            contentMax={9}
            btnLink="#"
          />
        </div>
        <div id="articles">
          <ArticlesSection articles={articles} />
        </div>
      </div>
    </div>
  );
}
