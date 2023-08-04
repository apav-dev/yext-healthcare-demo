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
  console.log("document", document);

  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout
        featuredLocations={document._site.c_featuredLocations}
        featuredSpecialties={document._site.c_featuredSpecialties}
      >
        <Hero
          name={document.name}
          coordinates={document.yextDisplayCoordinate}
          address={document.address}
          phone={document.mainPhone}
        />
        <FacilityContent description={document.c_facilityDescription} />
      </PageLayout>
    </QueryClientProvider>
  );
};

export default Facility;
