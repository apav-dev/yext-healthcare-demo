import { GetPath, TemplateProps } from "@yext/pages";
import Main from "../components/atoms/Main";
import Page from "../components/atoms/Page";
import StudioContainer from "../components/atoms/StudioContainer";
import JumpToNav from "../components/molecules/JumpToNav";
import PageOverview from "../components/molecules/PageOverview";
import VeridianFooter from "../components/molecules/VeridianFooter";
import VeridianHeader from "../components/molecules/VeridianHeader";

import "../index.css";

export const getPath: GetPath<TemplateProps> = () => {
  return "test";
};

export default function Test() {
  return (
    <Page>
      <VeridianHeader />
      <Main className={`pt-32 min-h-[calc(100vh-128px)]`}>
        <StudioContainer layout="grid" className="gap-x-4">
          <StudioContainer paddingTop="64px" className="col-span-1">
            <JumpToNav />
          </StudioContainer>
          <StudioContainer className="col-span-2">
            <PageOverview
              image={{
                url: "https://placehold.co/954x263",
                alt: "placeholder image",
              }}
              headingText="Heading Text goes here"
              body="text goes here"
            />
          </StudioContainer>
        </StudioContainer>
      </Main>
      <VeridianFooter />
    </Page>
  );
}
