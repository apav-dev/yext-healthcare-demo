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
import type { Result } from "@yext/search-headless-react";
import type { Content } from "../types/docSearch/content";

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
  experienceKey: "blog-and-document-search",
  locale: "en",
  apiKey: "cecfca4dac59395a87f9f57766abd38e",
  verticalKey: "content",
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
      {isLoading && (
        // Make a nice loading state
        <LoadingSkeleton nRows={7} />
      )}
      <div className="flex flex-col gap-y-2 text-base">
        {results?.map((result, i) => {
          return (
            <div key={`result-${i}`} className="py-4">
              <a
                href={result.rawData?.c_file?.url ?? ""}
                className="hover:underline"
              >
                <h2 className="font-medium text-slate-700 text-base">
                  {result.name}
                </h2>
              </a>
              <p className="text-slate-600 line-clamp-3 overflow-ell">
                {/* Give me a bunch of lorem ipsum */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae diam euismod, aliquam nisl quis, ultricies nunc. Donec
                vitae nunc euismod, aliquam nisl quis, ultricies nunc. Donec
                bibendum, nisl nec aliquam ultricies, nunc nisl aliquet nunc,
                ornare aliquam nisl nunc nec nisi. Donec vitae nunc euismod,
              </p>
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
