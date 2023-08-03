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

const Search: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <PageLayout includeSearch={true}>
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
    </PageLayout>
  );
};

export default Search;
