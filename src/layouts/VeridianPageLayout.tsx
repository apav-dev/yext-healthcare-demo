import VeridianFooter from "../components/veridian/molecules/VeridianFooter";
import VeridianHeader from "../components/veridian/molecules/VeridianHeader";
import Main from "../components/veridian/atoms/Main";
import Page from "../components/veridian/atoms/Page";
import PageOverview from "../components/veridian/molecules/PageOverview";
import StudioContainer from "../components/veridian/atoms/StudioContainer";
import JumpToNav from "../components/veridian/molecules/JumpToNav";

import "../index.css";

const VerdianPageLayout = () => {
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
};

export default VerdianPageLayout;
