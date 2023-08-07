import { CTA } from "./types/autogen";
import HorizontalDivider from "./components/HoriztontalDivider";

export interface InfoCardProps {
  title: string;
  description: string;
  cta?: CTA;
}

export default function InfoCard({ title, description, cta }: InfoCardProps) {
  return (
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <HorizontalDivider />
      <div className="self-stretch text-zinc-900 text-[52px] fonta-medium leading-[56px]">
        {title}
      </div>
      <div className="self-stretch text-neutral-500 text-2xl font-normal leading-[33.99px]">
        {description}
      </div>
      {cta && (
        <div className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex">
          <a
            className="text-center text-white text-base font-bold leading-normal"
            href={cta.link}
          >
            {cta.label}
          </a>
        </div>
      )}
    </div>
  );
}
