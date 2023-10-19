import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/PageLayout";
import DoctorLocator from "../components/DoctorLocator";

export const getPath: GetPath<TemplateProps> = () => {
  return `doctor-finder`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Doctor Finder",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const DoctorFinder: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout
      headerLogoURL={document._site.c_headerLogo?.url}
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
      locator
    >
      <div className="pt-32 lg:pt-[356px]">
        {/* <Transition
        show={showList}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}

        {/* </Transition> */}
        <DoctorLocator />
      </div>
      {/* <div className="flex items-center justify-center py-4">
        <Pagination
          customCssClasses={{
            paginationContainer: "shadow-none mb-0",
            label: "border-0 text-neutral-500",
            selectedLabel: "border-0 bg-green text-white bg-green-700",
            leftIconContainer: "border-0 px-4",
            rightIconContainer: "border-0 px-4",
          }}
        />
      </div> */}
      {/* </Transition> */}
      {/* <DoctorLocator /> */}
    </PageLayout>
  );
};

export default DoctorFinder;
