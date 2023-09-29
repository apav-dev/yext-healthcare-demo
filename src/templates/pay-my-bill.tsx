import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Main from "../components/atoms/Main";
import Page from "../components/atoms/Page";
import StudioContainer from "../components/atoms/StudioContainer";
import JumpToNav from "../components/molecules/JumpToNav";
import PageOverview from "../components/molecules/PageOverview";
import VeridianFooter from "../components/molecules/VeridianFooter";
import VeridianHeader from "../components/molecules/VeridianHeader";
import "../index.css";
import Heading from "../components/atoms/Heading";
import StyledText from "../components/atoms/StyledText";
import PhotoCard from "../components/molecules/PhotoCard";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id-pay-my-bill",
    localization: { locales: ["en"] },
    filter: { entityIds: ["FAQ-18"] },
    fields: ["name", "c_answerPlainText", "slug"],
  },
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
        <StudioContainer layout="grid" className="gap-x-4">
          <StudioContainer paddingTop="64px" className="col-span-1 row-span-2">
            <JumpToNav />
          </StudioContainer>
          <StudioContainer className="col-span-2">
            <PageOverview
              image={{
                url: `https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
                alt: "placeholder image",
              }}
              headingText={`${document.name}`}
              body={`${document.c_answerPlainText}`}
            />
          </StudioContainer>
          <StudioContainer className="col-span-2">
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
