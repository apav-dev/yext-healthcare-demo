import { useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import Taxonomy_specialty from "../../types/search/specialties";
import * as Collapsible from "@radix-ui/react-collapsible";
import Icon from "../atoms/Icon";

export default function SpecialtyCard({
  result,
}: CardProps<Taxonomy_specialty>) {
  const { name, c_specialtyOverviewDescription } = result.rawData;

  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      className="bg-white px-4 py-5 sm:px-6 border rounded shadow"
      open={open}
      onOpenChange={setOpen}
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-stone-900">
              <a href="#" className="hover:underline">
                {name}
              </a>
            </p>
          </div>
        </div>
        <Collapsible.Trigger asChild>
          <button className="">
            {open ? <Icon name="chevron-down" /> : <Icon name="chevron-up" />}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content>
        <p className="whitespace-pre-wrap">{c_specialtyOverviewDescription}</p>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
