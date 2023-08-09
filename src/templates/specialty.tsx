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
import HeroHalfImage from "../components/specialty/HeroHalfImage";
import SpecialtyContent from "../components/specialty/SpecialtyContent";
import Testimonial from "../components/specialty/Testimonial";
import SpecialistBanner from "../components/condition/SpecialistBanner";
import InfoGridBanner from "../components/condition/InfoGridBanner";
import ArticlesSecetion from "../components/specialty/ArticlesSection";
import Breadcrumbs from "../components/Breadcrumbs";

export const config: TemplateConfig = {
  stream: {
    $id: "specialties",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "c_specialtyOverviewDescription",
      "taxonomy_relatedConditions.id",
      "taxonomy_relatedConditions.name",
      "taxonomy_relatedConditions.slug",
      "taxonomy_relatedProcedures.id",
      "taxonomy_relatedProcedures.name",
      "taxonomy_relatedProcedures.slug",
      "taxonomy_relatedReasonsForVisit.id",
      "taxonomy_relatedReasonsForVisit.name",
      "taxonomy_relatedReasonsForVisit.slug",
      "taxonomy_subspecialties.id",
      "taxonomy_subspecialties.name",
      "taxonomy_subspecialties.slug",
      "taxonomy_relatedReasonsForVisit.id",
      "taxonomy_relatedReasonsForVisit.name",
      "taxonomy_relatedReasonsForVisit.slug",
    ],
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

const Specialty: Template<TemplateRenderProps> = ({
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
            { label: "Specialties" },
            { label: document.name },
          ]}
        />
      </div>
      <HeroHalfImage name={document.name} />
      <SpecialtyContent
        name={document.name}
        description={document.c_specialtyOverviewDescription}
        // locations={document._site.c_featuredLocations}
        // providers={document._site.c_featuredLocations}
        articles={document._site.c_featuredArticles}
        conditions={document.taxonomy_relatedConditions}
        visitReasons={document.taxonomy_relatedReasonsForVisit}
        procedures={document.taxonomy_relatedProcedures}
      />
      <Testimonial />
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

export default Specialty;
