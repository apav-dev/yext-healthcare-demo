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
import { ResultsCount } from "@yext/search-ui-react";
import DoctorFilterSearch from "../components/search/DoctorFilterSearch";
import FacetPopover from "../components/search/FacetPopover";

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
      footerLogoURL={document._site.c_footerLogo?.url}
    >
      <div className="mt-36">
        <DoctorFilterSearch />
        <div className="hidden lg:block">
          <div className="flex items-center px-6 py-4 border-b border-gray-200 h-20 shadow">
            <ResultsCount
              customCssClasses={{
                resultsCountContainer: "text-2xl mb-0 p-0",
              }}
            />
            <div className="flex ml-8 space-x-3.5">
              <FacetPopover
                facetFieldId="taxonomy_relatedSpecialties.name"
                label="Specialty"
              />
              <FacetPopover
                facetFieldId="taxonomy_relatedSpecialties.taxonomy_relatedConditions.name"
                label="Conditions"
              />
              <FacetPopover
                facetFieldId="insuranceAccepted"
                label="Insurance Accepted"
              />
              <FacetPopover facetFieldId="gender" label="Gender" />
            </div>
          </div>
        </div>
        <DoctorLocator />
      </div>
    </PageLayout>
  );
};

export default DoctorFinder;