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
import HeroNoImage from "../components/condition/HeroNoImage";
import ConditionContent from "../components/condition/ConditionContent";
import SpecialistBanner from "../components/condition/SpecialistBanner";
import ServicesBanner from "../components/condition/ServicesBanner";

export const config: TemplateConfig = {
  stream: {
    $id: "conditions",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "description",
      "c_diagnosticProcedures.name",
      "c_diagnosticProcedures.id",
      "c_treatments.name",
      "c_treatments.id",
    ],
    filter: { entityTypes: ["taxonomy_conditionTreated"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const condition = document;
  return {
    title: condition.name,
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
      <HeroNoImage name={document.name} />
      <ConditionContent
        description={document.description}
        diagnostics={document.c_diagnosticProcedures}
        name={document.name}
        treatments={document.c_treatments}
      />
      <SpecialistBanner name={document.name} />
      <ServicesBanner specialties={document._site.c_featuredSpecialties} />
    </PageLayout>
    // </QueryClientProvider>
  );
};

export default Facility;
