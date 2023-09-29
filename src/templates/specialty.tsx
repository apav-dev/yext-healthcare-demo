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
import HeroHalfImage from "../specialty/HeroHalfImage";
import SpecialtyContent from "../specialty/SpecialtyContent";
import Testimonial from "../specialty/Testimonial";
import SpecialistBanner from "../condition/SpecialistBanner";
import InfoGridBanner from "../condition/InfoGridBanner";
import Breadcrumbs from "../Breadcrumbs";

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
      "c_specialtyFacilities.id",
      "c_specialtyFacilities.name",
      "c_specialtyFacilities.slug",
      "c_specialtyProfessionals.id",
      "c_specialtyProfessionals.name",
      "c_specialtyProfessionals.slug",
      "c_specialtyProfessionals.headshot",
      "c_specialtyProfessionals.taxonomy_relatedSpecialties.name",
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
            { label: "Specialties", link: "#" },
            { label: document.name },
          ]}
        />
      </div>
      <HeroHalfImage name={document.name} />
      <SpecialtyContent
        name={document.name}
        description={document.c_specialtyOverviewDescription}
        locations={document.c_specialtyFacilities}
        providers={document.c_specialtyProfessionals}
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
