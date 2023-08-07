import { Popover, Transition } from "@headlessui/react";
import { useSearchState } from "@yext/search-headless-react";
import { Facets, StandardFacet } from "@yext/search-ui-react";
import { twMerge } from "tailwind-merge";

export interface FacetPopoverProps {
  facetFieldId: string;
  label?: string;
}

export default function FacetPopover({
  facetFieldId,
  label,
}: FacetPopoverProps) {
  const facets = useSearchState((state) => state.filters.facets);

  if (
    !facets ||
    !facets?.find((facet) => facet.fieldId === facetFieldId) ||
    facets?.find((facet) => facet.fieldId === facetFieldId)?.options.length ===
      0
  ) {
    return null;
  }

  return (
    <Popover className="relative z-[9]">
      {({ open }) => (
        <>
          <Popover.Button
            className={twMerge(
              `border border-green py-2.5 px-8 rounded-3xl hover:bg-green-700 focus:ring-green-700 hover:text-white`,
              open && "bg-light-green"
            )}
          >
            {label ??
              facets.find((facet) => facet.fieldId === facetFieldId)
                ?.displayName}
          </Popover.Button>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute bg-white w-80 shadow">
              <Facets
                onlyRenderChildren
                customCssClasses={{
                  facetsContainer:
                    "px-6 py-4 max-h-[800px] overflow-y-auto border border-light-gray",
                  titleLabel: "text-lg text-green hidden",
                  option: "py-2",
                  optionInput: "accent-green",
                  optionLabel: "text-base",
                  divider: "hidden",
                }}
              >
                <StandardFacet fieldId={facetFieldId} collapsible={false} />
              </Facets>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
