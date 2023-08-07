import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
// import Facility from "../types/autogen";
import PageLayout from "../components/PageLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeroHalfImage from "../components/specialty/HeroHalfImage";
import SpecialtyContent from "../components/specialty/SpecialtyContent";
import Testimonial from "../components/specialty/Testimonial";
import SpecialistBanner from "../components/condition/SpecialistBanner";
import ServicesBanner from "../components/condition/ServicesBanner";

export const config: TemplateConfig = {
  stream: {
    $id: "specialties",
    localization: { locales: ["en"], primary: false },
    fields: ["id", "name", "slug", "c_specialtyOverviewDescription"],
    filter: { entityTypes: ["taxonomy_specialty"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const specialty = document;
  return {
    title: specialty.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

// const queryClient = new QueryClient();

const Facility: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  // console.log("document", document);

  return (
    // <QueryClientProvider client={queryClient}>
    <PageLayout
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <HeroHalfImage name={document.name} />
      <SpecialtyContent
        name={document.name}
        description={document.c_specialtyOverviewDescription}
      />
      <Testimonial />
      <SpecialistBanner name={document.name} />
      <ServicesBanner specialties={document._site.c_featuredSpecialties} />
    </PageLayout>
    // </QueryClientProvider>
  );
};

export default Facility;
