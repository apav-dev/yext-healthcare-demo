import StudioContainer from "../atoms/StudioContainer";
import JumpToNav from "./JumpToNav";
import PageOverview, { initialProps } from "./PageOverview";

const PageBodyLayout = () => {
  return (
    <StudioContainer layout="grid" className="gap-x-4">
      <StudioContainer className="col-span-1">
        <JumpToNav />
      </StudioContainer>
      <StudioContainer className="col-span-2">
        <PageOverview {...initialProps} />
      </StudioContainer>
    </StudioContainer>
  );
};

export default PageBodyLayout;
