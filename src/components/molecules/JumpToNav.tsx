import StudioContainer from "../atoms/StudioContainer";
import StyledText from "../atoms/StyledText";

const JumpToNav = () => {
  return (
    <StudioContainer paddingLeft="8px" className="gap-y-4">
      <StudioContainer layout="row">
        <StudioContainer
          className="h-full w-1"
          backgroundColor="leaf"
          marginRight="8px"
        />
        <StyledText text="Overview" uppercase="Yes" color="leaf" />
      </StudioContainer>
      <StudioContainer layout="row" className="pl-3">
        <StyledText text="Featured Services" uppercase="Yes" color="leaf" />
      </StudioContainer>
    </StudioContainer>
  );
};

export default JumpToNav;
