import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import Doctor from "../types/autogen";
import PageLayout from "../components/PageLayout";
import DoctorLocator from "../components/DoctorLocator";

export const getPath: GetPath<TemplateProps> = () => {
  return `search`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const doctor = document as Doctor;
  return {
    title: doctor.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Search: Template<TemplateRenderProps> = () => {
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
