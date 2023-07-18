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
  } = document as Doctor;
  const specialty = c_specialty[0].name;

  return (
    <PageLayout>
      <CenteredContainer classname="max-w-5xl">
        <Section>
          <ResponsiveStack>
            <DoctorCard
              headshot={headshot}
              name={name}
              specialty={specialty}
              rating={4.5}
            />
            <DoctorLocationsMap />
          </ResponsiveStack>
        </Section>
        <Section>
          <AppointmentGrid />
        </Section>
      </CenteredContainer>
      <Section title="About" innerContainerClassname="max-w-5xl">
        <BodyText text={c_description} className="whitespace-pre-line pt-16" />
      </Section>
      <Section
        title="Education & Background"
        outerContainerClassname="bg-light-green"
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
              details: [c_specialty[0].name ?? ""],
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
      </Section>
      <Section title="Reviews"></Section>
      <Section
        title="Insurances Accepted"
        outerContainerClassname="bg-light-green"
        innerContainerClassname="max-w-5xl"
      >
        <Insurances insurances={c_insurances} />
      </Section>
      <Section title="FAQs" innerContainerClassname="max-w-5xl"></Section>
    </PageLayout>
  );
};

export default DoctorPage;
