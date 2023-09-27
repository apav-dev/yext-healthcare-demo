import { useEffect, useState } from "react";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/PageLayout";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { SearchBar } from "@yext/search-ui-react";
import {
  useSearchState,
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import type { Result } from "@yext/search-headless";
import type { Content } from "../types/docSearch/content";
import { BsFiletypePdf } from "react-icons/bs";

export const getPath: GetPath<TemplateProps> = () => {
  return `doc-search`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Document Search Demo",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const docSearchHeadless = provideHeadless({
  experienceKey: "handbook-search",
  locale: "en",
  apiKey: "cecfca4dac59395a87f9f57766abd38e",
  verticalKey: "handbooks",
  headlessId: "doc-search", // Because the whole app is wrapped ina different headless provider
});

const Inner = () => {
  const isLoading = useSearchState((s) => s.searchStatus.isLoading);
  const results = useSearchState(
    (s) => s.vertical.results
  ) as Result<Content>[];
  return (
    <div className="py-24 lg:py-40 px-20 flex flex-col gap-y-4 w-full h-full overflow-auto max-w-4xl">
      <h1 className="text-3xl font-medium text-slate-800">
        Medical Journal Search
      </h1>
      <SearchBar
        customCssClasses={{
          searchBarContainer: "my-0",
        }}
      />
      {isLoading && <LoadingSkeleton nRows={7} />}
      <div className="flex flex-col gap-y-3 text-base">
        {!isLoading &&
          results?.map((result, i) => {
            return (
              <div
                key={`result-${i}`}
                className="py-3 pl-3 pr-14 flex flex-row gap-x-3 rounded-lg border border-slate-200 overflow-ellipsis overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <BsFiletypePdf className="w-6 h-6 mt-2 text-slate-600" />
                </div>
                <div className="flex flex-col gap-y-1 w-full shrink-0">
                  <a
                    href={result.rawData?.c_file?.url ?? ""}
                    target="_blank"
                    className="hover:underline"
                  >
                    <h2 className="font-medium text-slate-700 text-base line-clamp-1 whitespace-nowrap overflow-ellipsis">
                      {result.name}
                    </h2>
                  </a>
                  <p className="text-sm text-slate-600 line-clamp-3 overflow-ellipsis overflow-hidden">
                    {result.segment?.text}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const DocSearchDemo: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout>
      <SearchHeadlessProvider searcher={docSearchHeadless}>
        <Inner />
      </SearchHeadlessProvider>
    </PageLayout>
  );
};

export default DocSearchDemo;
