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
import DoctorFilterSearch from "../components/search/DoctorFilterSearch";
import { Pagination, ResultsCount } from "@yext/search-ui-react";
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
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <div className="pt-32">
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
