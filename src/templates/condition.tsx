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
import PageLayout from "../PageLayout";
import HeroNoImage from "../condition/HeroNoImage";
import ConditionContent from "../condition/ConditionContent";
import SpecialistBanner from "../condition/SpecialistBanner";
import ServicesBanner from "../condition/InfoGridBanner";
import InfoGridBanner from "../condition/InfoGridBanner";
import Breadcrumbs from "../Breadcrumbs";

export const config: TemplateConfig = {
  stream: {
    $id: "conditions",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "description",
      "c_relatedSpecialties2.taxonomy_relatedProcedures.name",
      "c_relatedSpecialties2.taxonomy_relatedProcedures.id",
      "c_relatedSpecialties2.name",
      "c_relatedSpecialties2.id",
      "c_relatedSpecialties2.slug",
    ],
    filter: {
      entityTypes: ["taxonomy_conditionTreated"],
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
            { label: "Conditions", link: "#" },
            { label: document.name },
          ]}
        />
      </div>
      <HeroNoImage name={document.name} />
      <ConditionContent
        description={document.description}
        specialties={document.c_relatedSpecialties2}
        name={document.name}
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
