import { useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import Icon from "../atoms/Icon";
import Faq from "../../types/search/faqs";
import RTF from "../RTFV1";

export default function FaqCard({ result }: CardProps<Faq>) {
  const { question, answer } = result.rawData;

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
                {question}
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
        <div className="py-4">
          <RTF>{answer as string}</RTF>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
