import AltBrandIcon from "../atoms/AltBrandIcon";
import StudioContainer from "../atoms/StudioContainer";
import MUIIcon from "../atoms/MUIIcon";
import StyledText from "../atoms/StyledText";

const VeridianFooter = () => {
  return (
    <div>
      <StudioContainer
        backgroundColor="powder"
        layout="column"
        className="justify-center items-center w-full gap-y-4"
      >
        <AltBrandIcon />
        <div className="text-center">
          <span className="text-neutral-800 text-base font-light font-['Inter'] leading-normal">
            Call us at 1-800-VER-LIFE{" "}
          </span>
          <span className="text-neutral-800 text-base font-bold font-['Inter'] leading-normal">
            {" "}
          </span>
          <span className="text-neutral-800 text-base font-light font-['Inter'] leading-normal">
            (
          </span>
          <span className="text-neutral-800 text-base font-bold font-['Inter'] leading-normal">
            1-800-946-5343
          </span>
          <span className="text-neutral-800 text-base font-light font-['Inter'] leading-normal">
            )
          </span>
        </div>
      </StudioContainer>
      <StudioContainer
        paddingLeft="48px"
        paddingRight="24px"
        paddingTop="24px"
        paddingBottom="24px"
        backgroundColor="moss"
        layout="column"
        className="justify-center items-center"
      >
        <StudioContainer
          paddingLeft="24px"
          className="justify-center items-start gap-6"
        >
          <StudioContainer layout="row" className="justify-center items-center">
            <MUIIcon icon="YouTubeIcon" color="mint" size="L" />
            <MUIIcon icon="FacebookIcon" color="mint" size="L" />
            <MUIIcon icon="LinkedInIcon" color="mint" size="L" />
            <MUIIcon icon="InstagramIcon" color="mint" size="L" />
            <MUIIcon icon="PinterestIcon" color="mint" size="L" />
          </StudioContainer>
        </StudioContainer>
        <StyledText
          text="Copyright © 2023 Veridian Healthcare | All Rights Reserved"
          color="mint"
          size="XS"
          className="w-[455px] h-11 text-center leading-tight tracking-tight"
        />
      </StudioContainer>
    </div>
  );
};

export default VeridianFooter;
