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
import Doctor from "../types/autogen";
import PageLayout from "../components/PageLayout";
import CenteredContainer from "../components/atoms/CenteredContainer";
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
  const doctor = document as Doctor;
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
        featuredLocations={document._site.c_featuredLocations}
        featuredSpecialties={document._site.c_featuredSpecialties}
      >
        <CenteredContainer classname="max-w-5xl">
          <Section>
            <ResponsiveStack className="gap-x-6">
              <DoctorCard
                headshot={document.headshot}
                name={document.name}
                specialty={document.taxonomy_relatedSpecialties?.[0].name}
                rating={4.5}
                // containerClassname="pr-6"
              />
              <DoctorMiniMap
                locations={[
                  {
                    address: document.address,
                    geocodedCoordinate: document.yextDisplayCoordinate,
                  },
                  ...(document.c_alsoLocatedAt ?? []),
                ]}
              />
            </ResponsiveStack>
          </Section>
          <Section>
            <AppointmentGrid />
          </Section>
        </CenteredContainer>

        <ScrollableContainer>
          <ScrollableSection
            title="About"
            outerContainerClassname="scroll-mt-[166px]"
          >
            <BodyText
              text={document.c_providerBio}
              className="whitespace-pre-line"
            />
          </ScrollableSection>
          <ScrollableSection
            title="Education & Background"
            outerContainerClassname="bg-light-green scroll-mt-24"
            innerContainerClassname="max-w-5xl"
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
            outerContainerClassname="scroll-mt-[166px]"
          >
            <Reviews entityId={document.id} />
          </ScrollableSection>
          <ScrollableSection
            title="Insurances Accepted"
            outerContainerClassname="bg-light-green scroll-mt-[166px]]"
            innerContainerClassname="max-w-5xl"
          >
            <Insurances insurances={document.c_insurances} />
          </ScrollableSection>
          <ScrollableSection
            title="FAQs"
            innerContainerClassname="max-w-5xl"
            outerContainerClassname="scroll-mt-[166px]"
          >
            <Faqs faqs={document.c_faqs} />
          </ScrollableSection>
        </ScrollableContainer>
      </PageLayout>
    </QueryClientProvider>
  );
};

export default HealthPro;
