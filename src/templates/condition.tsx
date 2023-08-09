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
import PageLayout from "../components/PageLayout";
import HeroNoImage from "../components/condition/HeroNoImage";
import ConditionContent from "../components/condition/ConditionContent";
import SpecialistBanner from "../components/condition/SpecialistBanner";
import ServicesBanner from "../components/condition/InfoGridBanner";
import InfoGridBanner from "../components/condition/InfoGridBanner";
import Breadcrumbs from "../components/Breadcrumbs";

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
    filter: {
      entityTypes: ["taxonomy_conditionTreated"],
      savedFilterIds: ["1337143335"],
    },
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


const Condition: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <PageLayout
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <div className="mt-32">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", link: "/" },
            { label: "Conditions" },
            { label: document.name },
          ]}
        />
      </div>
      <HeroNoImage name={document.name} />
      <ConditionContent
        description={document.description}
        diagnostics={document.c_diagnosticProcedures}
        name={document.name}
        treatments={document.c_treatments}
      />
      <SpecialistBanner name={document.name} />
      <div className="px-20 py-8">
        <InfoGridBanner
          title="Our Services"
          content={document._site.c_featuredSpecialties}
          btnText="Explore Services"
          contentMax={12}
          btnLink="#"
        />
      </div>
    </PageLayout>
  );
};

export default Condition;
