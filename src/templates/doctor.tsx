import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
// import DoctorCard from "../components/DoctorCard";
// import Insurances from "../components/Insurances";
// import NavBar from "../components/NavBar";
// import SellingPoints from "../components/SellingPoints";
// import Container from "../components/atoms/Container";
// import Layout from "../components/atoms/Layout";
// import MultilineTextField from "../components/atoms/MultilineTextField";
// import StaticMap from "../components/atoms/StaticMap";
// import Address from "../components/molecules/Address";
// import HStack from "../components/molecules/HStack";
// import Section from "../components/molecules/Section";
import "../index.css";
import Doctor from "../types/autogen";
import PageLayout from "../components/PageLayout";
import CenteredContainer from "../components/atoms/CenteredContainer";
import ResponsiveStack from "../components/atoms/ResponsiveStack";
import DoctorCard from "../components/DoctorCard";
import Section from "../components/atoms/Section";

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
  const { name, c_specialty, headshot } = document as Doctor;
  const specialty = c_specialty[0].name;

  return (
    <PageLayout>
      <CenteredContainer maxWidth="max-w-5xl">
        <Section>
          <ResponsiveStack>
            <DoctorCard
              headshot={headshot}
              name={name}
              specialty={specialty}
              rating={4.5}
            />
          </ResponsiveStack>
        </Section>
      </CenteredContainer>
    </PageLayout>
  );
};

export default DoctorPage;
