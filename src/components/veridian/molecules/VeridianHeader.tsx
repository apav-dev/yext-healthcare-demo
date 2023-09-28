import BrandIcon from "../atoms/BrandIcon";
import Button from "../atoms/Button";
import StudioContainer from "../atoms/StudioContainer";
import MUIIcon from "../atoms/MUIIcon";
import StyledText from "../atoms/StyledText";

const VeridianHeader = () => {
  return (
    <StudioContainer
      layout="column"
      className="fixed top-0 left-0 right-0 w-full"
    >
      <StudioContainer
        layout="row"
        paddingRight="48px"
        paddingLeft="48px"
        paddingTop="4px"
        paddingBottom="4px"
        className="justify-end h-12 items-center"
        backgroundColor="dust"
      >
        <StudioContainer layout="row" className="gap-x-4 h-7 items-center">
          {/* TODO: These would be replaced with Link components */}
          <StyledText text="About" uppercase="Yes" />
          <StyledText text="Careers" uppercase="Yes" />
          <StyledText text="News" uppercase="Yes" />
          <StyledText text="Contact" uppercase="Yes" />
        </StudioContainer>
      </StudioContainer>
      <StudioContainer
        layout="row"
        backgroundColor="white"
        className="h-20 shadow  items-center"
        paddingLeft="48px"
        paddingRight="48px"
        paddingTop="16px"
        paddingBottom="16px"
      >
        <StudioContainer layout="row" className="max-w-8xl mx-auto gap-x-12">
          <StudioContainer>
            <BrandIcon />
          </StudioContainer>
          <>
            {/* <StudioContainer layout="row" className="hidden gap-x-8 lg:flex"> */}
            {/* TODO: Replace each with dropdown component */}
            {/* <StudioContainer
              layout="row"
              className="gap-x-1 items-center"
              paddingTop="4px"
              paddingBottom="4px"
            >
              <StyledText
                size="XS"
                weight="Bold"
                uppercase="Yes"
                text="Services"
                color="sage"
              />
              <MUIIcon icon="KeyboardArrowDownIcon" size="L" color="sage" />
            </StudioContainer>
            <StudioContainer
              layout="row"
              className="gap-x-1 items-center"
              paddingTop="4px"
              paddingBottom="4px"
            >
              <StyledText
                size="XS"
                weight="Bold"
                uppercase="Yes"
                text="Locations"
                color="sage"
              />
              <MUIIcon icon="KeyboardArrowDownIcon" size="L" color="sage" />
            </StudioContainer>
            <StudioContainer
              layout="row"
              className="gap-x-1 items-center"
              paddingTop="4px"
              paddingBottom="4px"
            >
              <StyledText
                size="XS"
                weight="Bold"
                uppercase="Yes"
                text="Patients"
                color="sage"
              />
              <MUIIcon icon="KeyboardArrowDownIcon" size="L" color="sage" />
            </StudioContainer> */}
            {/* </StudioContainer> */}
          </>
          <StudioContainer layout="row" className="gap-x-4">
            {/* TODO: Replace with Search Bar */}
            <StudioContainer
              layout="row"
              className="w-[282px] h-[50px] p-4 bg-white rounded-[100px] border border-stone-300 items-center gap-1"
            >
              <StudioContainer
                layout="row"
                className="items-center inline-flex"
              >
                <MUIIcon icon="SearchIcon" size="L" color="sage" />
              </StudioContainer>
              <StyledText
                text="Search for anything..."
                size="XS"
                color="moss"
              />
            </StudioContainer>
            <Button type="Outline" text="Schedule an Appointment" />
            <Button type="Primary" text="Find a Provider" />
          </StudioContainer>
        </StudioContainer>
      </StudioContainer>
    </StudioContainer>
  );
};

export default VeridianHeader;
