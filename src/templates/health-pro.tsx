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
import ResponsiveStack from "../components/atoms/ResponsiveStack";
import DoctorCard from "../components/DoctorCard";
import Section from "../components/atoms/Section";
import DoctorMiniMap from "../components/DoctorMiniMap";
import AppointmentGrid from "../components/AppointmentGrid";
import BodyText from "../components/atoms/BodyText";
import Insurances from "../components/Insurances";
import DoctorBackground from "../components/DoctorBackground";
import { ScrollableContainer } from "../components/ScrollingContainer";
import { ScrollableSection } from "../components/atoms/ScrollableSection";
import Reviews from "../components/Reviews";
import Faqs from "../components/Faqs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Breadcrumbs from "../components/Breadcrumbs";
import { HealthPro as HealthProType } from "../components/search/DoctorSearchCard";

export const config: TemplateConfig = {
  stream: {
    $id: "doctors",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "npi",
      "c_providerBio",
      "headshot",
      "taxonomy_relatedSpecialties.name",
      "taxonomy_relatedSpecialties.slug",
      "address",
      "yextDisplayCoordinate",
      "c_alsoLocatedAt.address",
      "c_alsoLocatedAt.yextDisplayCoordinate",
      "c_insurances",
      "insuranceAccepted",
      "educationList",
      "certifications",
      "languages",
      "gender",
      "c_faqs.question",
      "c_faqs.answer",
      "c_relatedHealthcareFacilities.name",
    ],
    filter: { entityTypes: ["healthcareProfessional"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : `health-pro/${document.id}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const doctor = document as HealthProType;
  return {
    title: doctor.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const queryClient = new QueryClient();

const HealthPro: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout
        headerLogoURL={document._site.c_headerLogo?.url}
        featuredLocations={document._site.c_featuredLocations}
        featuredSpecialties={document._site.c_featuredSpecialties}
        containerClassName="pt-32"
      >
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", link: "/" },
            { label: "Healthcare Providers", link: "#" },
            { label: document.name },
          ]}
        />
        <Section backgroundColor="bg-stone-50">
          <ResponsiveStack className="gap-x-6 lg:gap-x-24">
            <DoctorCard
              headshot={document.headshot}
              name={document.name}
              specialtyName={document.taxonomy_relatedSpecialties?.[0].name}
              specialtySlug={document.taxonomy_relatedSpecialties?.[0].slug}
              rating={4.5}
              address={document.address}
              // containerClassname="pr-6"
            />
            <DoctorMiniMap
              locations={[
                {
                  // address: document.address,
                  geocodedCoordinate: document.yextDisplayCoordinate,
                },
                ...(document.c_alsoLocatedAt?.map((location) => ({
                  geocodedCoordinate: location.yextDisplayCoordinate,
                })) ?? []),
              ]}
            />
          </ResponsiveStack>
        </Section>
        <Section title="Availability">
          <AppointmentGrid />
        </Section>

        <ScrollableContainer>
          <ScrollableSection
            title="About"
            backgroundColor="scroll-mt-[166px]"
            // outerContainerClassname="scroll-mt-[166px]"
          >
            <BodyText
              text={document.c_providerBio}
              className="whitespace-pre-line"
            />
          </ScrollableSection>
          <ScrollableSection
            title="Education & Background"
            backgroundColor="scroll-mt-[166px] bg-stone-50"
          >
            <DoctorBackground
              items={[
                {
                  icon: "school",
                  name: "Education",
                  details: document.educationList?.map(
                    (education) => education.institutionName
                  ),
                },
                {
                  icon: "file-certificate",
                  name: "Board Certifications",
                  details: document.certifications,
                },
                {
                  icon: "hospital",
                  name: "Practice Names",
                  details: document.c_relatedHealthcareFacilities?.map(
                    (facility) => facility.name
                  ),
                },
                {
                  icon: "stethoscope",
                  name: "Specialties",
                  details: [document.taxonomy_relatedSpecialties?.[0].name],
                },
                {
                  icon: "language",
                  name: "Languages Spoken",
                  details: document.languages,
                },
                {
                  icon: "venus-mars",
                  name: "Gender",
                  details: [document.gender],
                },
                {
                  icon: "hashtag",
                  name: "NPI Number",
                  details: [document.npi],
                },
              ]}
            />
          </ScrollableSection>

          <ScrollableSection
            title="Reviews"
            backgroundColor="scroll-mt-[166px]"
          >
            <Reviews entityId={document.id} />
          </ScrollableSection>
          <ScrollableSection
            title="Insurances Accepted"
            backgroundColor="scroll-mt-[166px] bg-stone-50"
          >
            <Insurances insurances={document.c_insurances} />
          </ScrollableSection>
          <ScrollableSection title="FAQs" backgroundColor="scroll-mt-[166px]">
            <Faqs faqs={document.c_faqs} />
          </ScrollableSection>
        </ScrollableContainer>
      </PageLayout>
    </QueryClientProvider>
  );
};

export default HealthPro;
