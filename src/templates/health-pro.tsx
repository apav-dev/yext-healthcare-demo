import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import AppointmentGrid from "../components/AppointmentGrid";
import DoctorBackground from "../components/DoctorBackground";
import DoctorCard from "../components/DoctorCard";
import Faqs from "../components/Faqs";
import StaticMap from "../components/StaticMap";
import StudioLayout from "../components/StudioLayout";
import StudioReviews from "../components/StudioReviews";
import BodyText from "../components/atoms/BodyText";
import ResponsiveStack from "../components/atoms/ResponsiveStack";
import Section from "../components/atoms/Section";
import "../index.css";
import Doctor from "../types/autogen";

export const config: TemplateConfig = {
  stream: {
    $id: "doctors",
    localization: { locales: ["en"], primary: false },
    fields: [
      "headshot",
      "name",
      "taxonomy_relatedSpecialties.name",
      "address",
      "c_providerBio",
      "certifications",
      "languages",
      "gender",
      "npi",
      "c_insurances",
      "slug",
      "yextDisplayCoordinate",
      "c_faqs.question",
      "c_faqs.answer",
      "c_faqs.answerV2",
    ],
    filter: { entityTypes: ["healthcareProfessional"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
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

const HealthPro: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  console.log("document", document);
  return (
    <StudioLayout>
      <Section>
        <ResponsiveStack className="gap-x-6">
          <DoctorCard
            headshot={document.headshot}
            name={document.name}
            specialty={document.taxonomy_relatedSpecialties[0].name}
            rating={4.5}
          />
          <StaticMap
            coordinates={{
              latitude: document.yextDisplayCoordinate.latitude,
              longitude: document.yextDisplayCoordinate.longitude,
            }}
            address={{
              line1: `${document.address.line1}`,
              line2: `${document.address.line2}`,
              line3: "",
              city: `${document.address.city}`,
              region: `${document.address.region}`,
              postalCode: `${document.address.postalCode}`,
              countryCode: `${document.address.countryCode}`,
            }}
          />
        </ResponsiveStack>
      </Section>
      <Section title="Availability" outerContainerClassname="pt-">
        <AppointmentGrid />
      </Section>
      <Section title="About" outerContainerClassname="scroll-mt-[166px]">
        <BodyText
          text={document.c_providerBio}
          className="whitespace-pre-line"
        />
      </Section>
      <Section
        title="Education & Background"
        outerContainerClassname="bg-light-green scroll-mt-24"
        innerContainerClassname="max-w-5xl"
        backgroundColor="#EDF0EB"
      >
        <DoctorBackground
          items={[
            {
              icon: "file-certificate",
              name: "Board Certifications",
              details: document.certifications,
            },
            {
              icon: "stethoscope",
              name: "Specialties",
              details: [document.taxonomy_relatedSpecialties[0].name],
            },
            {
              icon: "language",
              name: "Languages Spoken",
              details: document.languages,
            },
            { icon: "venus-mars", name: "Gender", details: [document.gender] },
            { icon: "hashtag", name: "NPI Number", details: [document.npi] },
          ]}
        />
      </Section>
      <Section title="Reviews">
        <StudioReviews />
      </Section>
      <Section
        title="FAQs"
        innerContainerClassname="max-w-5xl"
        outerContainerClassname="scroll-mt-[166px]"
        backgroundColor="#EDF0EB"
      >
        <Faqs faqs={document.c_faqs} />
      </Section>
    </StudioLayout>
  );
};

export default HealthPro;
