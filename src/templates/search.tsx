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
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import UniversalSearch from "../components/UniversalSearch";
import Breadcrumbs from "../components/Breadcrumbs";

export const getPath: GetPath<TemplateProps> = () => {
  return `search`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Search",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const searcher = provideHeadless({
  apiKey: YEXT_PUBLIC_SEARCH_API_KEY,
  experienceKey: "find-a-doc-specialties",
  locale: "en",
  verticalKey: "healthcare_professionals",
});

const DoctorFinder: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <SearchHeadlessProvider searcher={searcher}>
        <div className="pt-32">
          <Breadcrumbs
            breadcrumbs={[
              { link: "/", label: "Home" },
              { label: "Search Results" },
            ]}
          />
          <UniversalSearch />
        </div>
      </SearchHeadlessProvider>
    </PageLayout>
  );
};

export default DoctorFinder;
