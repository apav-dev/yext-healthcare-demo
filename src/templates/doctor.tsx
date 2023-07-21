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
import DoctorLocationsMap from "../components/DoctorLocationsMap";
import AppointmentGrid from "../components/AppointmentGrid";
import BodyText from "../components/atoms/BodyText";
import Insurances from "../components/Insurances";
import DoctorBackground from "../components/DoctorBackground";
import { ScrollableContainer } from "../components/ScrollingContainer";
import { ScrollableSection } from "../components/atoms/ScrollableSection";
import Reviews from "../components/Reviews";
import Faqs from "../components/Faqs";

export const config: TemplateConfig = {
  stream: {
    $id: "doctors",
    localization: { locales: ["en"], primary: false },
    fields: [
      "name",
      "slug",
      "npi",
      "c_description",
      "headshot",
      "c_specialty.name",
      "c_locationsPracticingAt.address",
      "c_locationsPracticingAt.geocodedCoordinate",
      "c_insurances",
      "c_education",
      "c_boardCertifications",
      "c_practiceNames",
      "c_languagesSpoken",
      "c_gender",
      "c_faqs.question",
      "c_faqs.answer",
    ],
    filter: { entityTypes: ["ce_doctor"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  const doctor = document as Doctor;
  return `${doctor.slug}`;
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

const DoctorPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const {
    name,
    c_specialty,
    headshot,
    c_description,
    c_insurances,
    c_education,
    c_boardCertifications,
    c_practiceNames,
    c_languagesSpoken,
    c_gender,
    npi,
    c_locationsPracticingAt,
    c_faqs,
  } = document as Doctor;
  const specialty = c_specialty[0].name;

  return (
    <PageLayout>
      <CenteredContainer classname="max-w-5xl">
        <Section>
          <ResponsiveStack className="gap-x-6">
            <DoctorCard
              headshot={headshot}
              name={name}
              specialty={specialty}
              rating={4.5}
              // containerClassname="pr-6"
            />
            <DoctorLocationsMap locations={c_locationsPracticingAt} />
          </ResponsiveStack>
        </Section>
        <Section>
          <AppointmentGrid />
        </Section>
      </CenteredContainer>
      {/* <NavBar labels={["About", "Insurances", "Locations"]} /> */}

      <ScrollableContainer>
        <ScrollableSection title="About" outerContainerClassname="scroll-mt-24">
          <BodyText text={c_description} className="whitespace-pre-line" />
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
                details: c_education,
              },
              {
                icon: "file-certificate",
                name: "Board Certifications",
                details: c_boardCertifications,
              },
              {
                icon: "hospital",
                name: "Practice Names",
                details: c_practiceNames,
              },
              {
                icon: "stethoscope",
                name: "Specialties",
                details: [c_specialty?.[0].name ?? ""],
              },
              {
                icon: "language",
                name: "Languages Spoken",
                details: c_languagesSpoken,
              },
              {
                icon: "venus-mars",
                name: "Gender",
                details: [c_gender],
              },
              {
                icon: "hashtag",
                name: "NPI Number",
                details: [npi],
              },
            ]}
          />
        </ScrollableSection>

        <ScrollableSection
          title="Reviews"
          outerContainerClassname="scroll-mt-24"
        >
          <Reviews />
        </ScrollableSection>
        <ScrollableSection
          title="Insurances Accepted"
          outerContainerClassname="bg-light-green scroll-mt-24"
          innerContainerClassname="max-w-5xl"
        >
          <Insurances insurances={c_insurances} />
        </ScrollableSection>
        <ScrollableSection
          title="FAQs"
          innerContainerClassname="max-w-5xl"
          outerContainerClassname="scroll-mt-24"
        >
          <Faqs faqs={c_faqs} />
        </ScrollableSection>
      </ScrollableContainer>
    </PageLayout>
  );
};

export default DoctorPage;
