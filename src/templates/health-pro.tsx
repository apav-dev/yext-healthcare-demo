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
import Section from "../components/atoms/Section";
import AppointmentGrid from "../components/AppointmentGrid";
import BodyText from "../components/atoms/BodyText";
import Insurances from "../components/Insurances";
import DoctorBackground from "../components/DoctorBackground";
import ScrollableContainer from "../components/ScrollingContainer";
import ScrollableSection from "../components/atoms/ScrollableSection";
import Reviews from "../components/Reviews";
import Faqs from "../components/Faqs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Breadcrumbs from "../components/Breadcrumbs";
import { HealthPro as HealthProType } from "../components/search/DoctorSearchCard";
import HorizontalDivider from "../components/HoriztontalDivider";
import LocationPinIcon from "../components/Icons/LocationPinIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";
import SpecialtyIcon from "../components/Icons/SpecialtyIcon";
import HStack from "../components/atoms/HStack";
import Image from "../components/atoms/Image";
import HeadingText from "../components/atoms/HeadingText";
import VStack from "../components/atoms/VStack";
import Button from "../components/atoms/Button";
import StarIcon from "../components/Icons/StarIcon";
import CalendarIcon from "../components/Icons/CalendarIcon";
import StudioMap from "../components/StudioMap";
import ProviderContent from "../components/ProviderContent";

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

const HealthPro: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const educationInfo = document.educationList?.map(
    (education) => education.institutionName
  );

  const relatedFacilityInfo = document.c_relatedHealthcareFacilities?.map(
    (facility) => facility.name
  );
  return (
    <PageLayout
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
        <ResponsiveStack className="gap-y-6 lg:gap-x-6">
          <HStack classname="justify-start items-center gap-8 basis-2/3">
            <VStack classname="justify-start items-center gap-4">
              <Image img={document.headshot} />
              <HStack classname="justify-center items-center gap-2">
                <StarIcon />
                <BodyText
                  text="4.5"
                  color="dark-gray"
                  size="xl"
                  weight="Bold"
                />
              </HStack>
            </VStack>
            <VStack classname="justify-start items-start gap-6">
              <HorizontalDivider />
              <HeadingText
                level="Heading 2"
                classname="text-zinc-900 text-[52px] font-medium leading-[56px]"
                text={document.name}
              />
              <HStack classname="items-center gap-2">
                <SpecialtyIcon />
                <BodyText
                  text={document.taxonomy_relatedSpecialties?.[0].name}
                  size="xl"
                />
              </HStack>
              <HStack classname="items-center gap-2">
                <PhoneIcon />
                <BodyText text="212 - 212 - 3000" size="xl" />
              </HStack>
              <HStack classname="items-center gap-2">
                <LocationPinIcon />
                <BodyText
                  text={`${document.address.line1}, ${document.address.city}, ${document.address.region}, ${document.address.postalCode}`}
                  size="xl"
                />
              </HStack>
              <Button type="primary">
                <CalendarIcon />
                <BodyText
                  color="white"
                  size="base"
                  text="Schedule an Appointment"
                />
              </Button>
            </VStack>
          </HStack>
          <StudioMap coordinate={document.yextDisplayCoordinate} />
        </ResponsiveStack>
      </Section>
      <Section title="Availability">
        <AppointmentGrid />
      </Section>
      <Section title="About">
        <BodyText text={document.c_providerBio} />
      </Section>
    </PageLayout>
  );
};

export default HealthPro;

/* <ScrollableContainer>
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
                  details: educationInfo,
                },
                {
                  icon: "file-certificate",
                  name: "Board Certifications",
                  details: document.certifications,
                },
                {
                  icon: "hospital",
                  name: "Practice Names",
                  details: relatedFacilityInfo,
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
        </ScrollableContainer> */
