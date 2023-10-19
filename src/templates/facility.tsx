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
import Hero from "../components/facility/Hero";
import FacilityContent from "../components/facility/FacilityContent";
import Breadcrumbs from "../components/Breadcrumbs";

export const config: TemplateConfig = {
  stream: {
    $id: "facilities",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "address",
      "hours",
      "mainPhone",
      "yextDisplayCoordinate",
      "c_facilityDescription",
      "taxonomy_relatedSpecialties.id",
      "taxonomy_relatedSpecialties.name",
      "taxonomy_relatedSpecialties.slug",
      "c_relatedHealthcareProfessionals.id",
      "c_relatedHealthcareProfessionals.name",
      "c_relatedHealthcareProfessionals.headshot",
      "c_relatedHealthcareProfessionals.taxonomy_relatedSpecialties.name",
      "c_relatedHealthcareProfessionals.slug",
    ],
    filter: { entityTypes: ["healthcareFacility"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const facility = document;
  return {
    title: facility.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const queryClient = new QueryClient();

const Facility: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout
        headerLogoURL={document._site.c_headerLogo?.url}
        featuredLocations={document._site.c_featuredLocations}
        featuredSpecialties={document._site.c_featuredSpecialties}
      >
        <div className="mt-32">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", link: "/" },
              { label: "Facilities", link: "#" },
              { label: document.name },
            ]}
          />
        </div>
        <Hero
          name={document.name}
          coordinates={document.yextDisplayCoordinate}
          address={document.address}
          phone={document.mainPhone}
        />
        <FacilityContent
          description={document.c_facilityDescription}
          specialties={document.taxonomy_relatedSpecialties}
          providers={document.c_relatedHealthcareProfessionals}
          entityId={document.id}
        />
      </PageLayout>
    </QueryClientProvider>
  );
};

export default Facility;
