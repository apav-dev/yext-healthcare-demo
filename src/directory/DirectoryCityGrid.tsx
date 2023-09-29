import * as React from "react";
import { Address } from "@yext/sites-components";
// import { formatPhoneNumber } from "react-phone-number-input";
import { DirectoryParent } from "../../types/DirectoryParent";
import { DirectoryChild } from "../../types/DirectoryChild";
import RelatedProviderCard from "../facility/RelatedProviderCard";
import Button from "../facility/Button";
import InfoGridBanner from "../../condition/InfoGridBanner";
import RelatedProviderCardFull from "./RelatedProviderCardFullDetail";
import RelatedLocationCardFull from "./RelatedLocationCardFullDetail";

export interface DirectoryGridProps {
  name?: string;
  description?: string;
  directoryParents?: DirectoryParent[];
  directoryChildren?: DirectoryChild[];
  relativePrefixToRoot?: string;
  locations?: any;
  providers?: any;
  providerHeader?: string;
  cityName?: string;
}

const sortByCity = (a: DirectoryChild, b: DirectoryChild) => {
  const first = a.address.city;
  const second = b.address.city;
  return first < second ? -1 : first > second ? 1 : 0;
};

const DirectoryCityGrid = ({
  name,
  description,
  directoryChildren,
  providers,
  locations,
  providerHeader,
  cityName,
  relativePrefixToRoot,
}: DirectoryGridProps) => {
  let childrenDivs;

  const filteredLocations = locations?.filter((location) =>
    location.id.includes("facility")
  );

  const filteredProviders = providers?.filter((provider) =>
    provider.id.includes("provider")
  );

  return (
    <>
      <div className="flex w-[95%] px-20 gap-8 mt-8">
        <div className="flex flex-col gap-12 mb-20">
          {filteredLocations && (
            <div className="flex flex-col gap-12" id="locations">
              <div className="flex flex-col gap-6">
                <div className="w-[88px] h-3 bg-green-700" />
                <h3 className="text-text-500 text-zinc-900">
                  {`Facilities in ${cityName}`}
                </h3>
              </div>
              <div className="flex flex-col gap-12">
                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                  {filteredLocations.map((location) => (
                    <RelatedLocationCardFull location={location} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {filteredProviders && (
            <div className="flex flex-col gap-12" id="providers">
              <div className="flex flex-col gap-6">
                <div className="w-[88px] h-3 bg-green-700" />
                <h3 className="text-text-500 text-zinc-900">
                  {`Providers in ${cityName}`}
                </h3>
              </div>
              <div className="flex flex-col gap-12">
                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                  {filteredProviders.map((provider) => (
                    <RelatedProviderCardFull provider={provider} />
                  ))}
                </div>
                <Button color="primary" href="/doctor-finder">
                  <span>Explore All Providers</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DirectoryCityGrid;
