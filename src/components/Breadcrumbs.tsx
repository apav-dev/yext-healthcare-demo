import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export interface BreadcrumbsProps {
  breadcrumbs: {
    label: string;
    link?: string;
  }[];
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <div className="h-14 px-20 py-4 justify-start items-start gap-4 inline-flex">
      {breadcrumbs.map((breadcrumb, index) => (
        <div className="justify-start items-start gap-3 flex">
          <a
            href={breadcrumb.link}
            className={twMerge(
              "text-zinc-900 text-base font-normal leading-normal",
              index !== breadcrumbs.length - 1 && "underline"
            )}
          >
            {breadcrumb.label}
          </a>
          {index !== breadcrumbs.length - 1 && (
            <div className="w-5 h-5 relative">
              <FaChevronRight className="absolute inset-0 w-full h-full text-zinc-900" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
