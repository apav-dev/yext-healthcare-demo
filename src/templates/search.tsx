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
import { useState } from "react";
import {
  Pagination,
  ResultsCount,
  VerticalResults,
} from "@yext/search-ui-react";
import Icon from "../components/atoms/Icon";
import BodyText from "../components/atoms/BodyText";
import CenteredContainer from "../components/atoms/CenteredContainer";
import DoctorSearchCard from "../components/search/DoctorSearchCard";

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
  const [showList, setShowListMap] = useState(true);
  return (
    <PageLayout includeSearch={true}>
      {showList ? (
        <div className="h-full">
          <CenteredContainer classname="flex flex-col">
            <div className="flex justify-between items-center pt-6 pb-4">
              <ResultsCount
                customCssClasses={{
                  resultsCountContainer: "font-sans-bold text-lg mb-0 p-0",
                }}
              />
              <button className="flex gap-x-3">
                <Icon name="map" color="text-green" />
                <BodyText color="text-green" text="SHOW MAP" />
              </button>
            </div>
            <VerticalResults
              customCssClasses={{
                verticalResultsContainer: "flex flex-col gap-y-6",
              }}
              CardComponent={DoctorSearchCard}
            />
            <Pagination
              customCssClasses={{
                paginationContainer: "py-8 shadow-none",
                label: "font-pt-sans-regular border-0",
                selectedLabel: "font-pt-sans-bold border-0 bg-green text-white",
                leftIconContainer: "border-0 px-4 transform",
                rightIconContainer: "border-0 px-4 transform",
              }}
            />
          </CenteredContainer>
        </div>
      ) : (
        <></>
      )}
    </PageLayout>
  );
};

export default Search;
