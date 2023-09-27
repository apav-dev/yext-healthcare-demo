import * as React from "react";
import { ReactNode } from "react";
import { HomeIcon } from "@heroicons/react/20/solid";
import { Link } from "@yext/sites-components";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

export interface BreadCrumbProps {
  name: string;
  slug?: string;
  breadcrumbs?: Array<BreadCrumbProps>;
  className?: string;
  separator?: ReactNode;
  baseUrl: string;
}

export interface BreadCrumbsProps {
  name?: any;
  breadcrumbs?: Array<BreadCrumbProps>;
  className?: string;
  separator?: ReactNode;
  baseUrl: string;
}

const Breadcrumb = (props: BreadCrumbProps) => {
  const { name, slug } = props;

  if (slug) {
    return (
      <Link href={slug}>
        <span className="underline hover:cursor-pointer">{name}</span>
      </Link>
    );
  }

  return <span className="Breadcrumbs-label">{name}</span>;
};

const DirectoryBreadcrumbs = (props: BreadCrumbsProps) => {
  const { breadcrumbs, className, separator = ">", baseUrl } = props;

  return (
    <div className="h-14 px-20 py-4 justify-start items-start gap-4 inline-flex">
      {breadcrumbs?.length && (
        <nav className={clsx("Breadcrumbs", className)} aria-label="Breadcrumb">
          <ol className="justify-start items-start gap-3 flex">
            <Breadcrumb name={`Home`} slug={`index.html`} {...props} />
            <div className="w-5 h-5 relative">
              <FaChevronRight className="absolute inset-0 w-full h-full text-zinc-900" />
            </div>
            {breadcrumbs.map(({ name, slug }, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              const isFirst = idx === 0;

              return (
                <li className="Breadcrumbs-item flex gap-3" key={idx}>
                  {isFirst ? (
                    <Breadcrumb
                      name={`All Locations`}
                      slug={isLast ? "" : baseUrl + slug}
                      {...props}
                    />
                  ) : (
                    <Breadcrumb
                      name={name}
                      slug={isLast ? "" : baseUrl + slug}
                      {...props}
                    />
                  )}
                  {!isLast && (
                    <div className="w-5 h-5 relative">
                      <FaChevronRight className="absolute inset-0 w-full h-full text-zinc-900" />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </div>
  );
};

export default DirectoryBreadcrumbs;
