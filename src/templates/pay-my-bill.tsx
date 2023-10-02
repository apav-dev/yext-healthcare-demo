import {
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
} from "@yext/pages";
import Heading from "../components/atoms/Heading";
import Main from "../components/atoms/Main";
import Page from "../components/atoms/Page";
import StudioContainer from "../components/atoms/StudioContainer";
import StyledText from "../components/atoms/StyledText";
import JumpToNav from "../components/molecules/JumpToNav";
import PageOverview from "../components/molecules/PageOverview";
import PhotoCard from "../components/molecules/PhotoCard";
import VeridianFooter from "../components/molecules/VeridianFooter";
import VeridianHeader from "../components/molecules/VeridianHeader";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id-pay-my-bill",
    localization: { locales: ["en"] },
    filter: { entityIds: ["FAQ-18"] },
    fields: ["c_coverPhoto", "name", "c_answerPlainText", "slug"],
  },
};
export const getHeadConfig = (): HeadConfig => {
  return {
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function PayMyBill({ document }: TemplateProps) {
  return (
    <Page>
      <VeridianHeader />
      <Main className={`pt-32 pb-16 min-h-[calc(100vh-128px)]`}>
        <StudioContainer layout="grid" columnCount="6" className="gap-x-4">
          <StudioContainer
            paddingTop="64px"
            columnSpan="1"
            className=" row-span-2"
            paddingLeft="0px"
          >
            <JumpToNav />
          </StudioContainer>
          <StudioContainer columnSpan="5">
            <PageOverview
              image={{
                url: document.c_coverPhoto.image.url,
                alt: "placeholder image",
              }}
              headingText={`${document.name}`}
              body={`${document.c_answerPlainText}`}
              ctaText={`Pay my Bill`}
            />
          </StudioContainer>
          <StudioContainer columnSpan="5">
            <StudioContainer
              layout="column"
              paddingTop="64px"
              paddingBottom="64px"
              paddingLeft="48px"
              paddingRight="48px"
              className="pb-3 gap-y-8"
            >
              <Heading rank="2" text="Featured Services" />
              <StyledText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, nibh quis ultrices vehicula, mauris mi euismod justo, a suscipit mi arcu nec justo" />
              <StudioContainer
                layout="grid"
                className="gap-x-6 gap-y-8 grid-cols-2"
              >
                <PhotoCard
                  title="Family Medicine Services"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, nibh quis ultrices vehicula, mauris mi euismod justo, a suscipit mi arcu nec justo."
                  image={{
                    url: "https://images.unsplash.com/photo-1643869355390-4dcffc63d049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  }}
                  ctaText="Read More"
                />
                <PhotoCard
                  title="Preventative Care Services"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, nibh quis ultrices vehicula, mauris mi euismod justo, a suscipit mi arcu nec justo."
                  image={{
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Jenny_Hill_2017-02-04_%28Unsplash%29.jpg/1200px-Jenny_Hill_2017-02-04_%28Unsplash%29.jpg",
                  }}
                  ctaText="Read More"
                />
                <PhotoCard
                  title="Lab Services"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, nibh quis ultrices vehicula, mauris mi euismod justo, a suscipit mi arcu nec justo."
                  image={{
                    url: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                  }}
                  ctaText="Read More"
                />
                <PhotoCard
                  title="Pediatric Services"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, nibh quis ultrices vehicula, mauris mi euismod justo, a suscipit mi arcu nec justo."
                  image={{
                    url: "https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFufGVufDB8fDB8fHww&w=1000&q=80",
                  }}
                  ctaText="Read More"
                />
              </StudioContainer>
            </StudioContainer>
          </StudioContainer>
        </StudioContainer>
      </Main>
      <VeridianFooter />
    </Page>
  );
}
