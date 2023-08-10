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
import { FilterSearch } from "@yext/search-ui-react";
import { useEffect, useState } from "react";

export const getPath: GetPath<TemplateProps> = () => {
  return `guided-doctor-finder`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Guided Doctor Finder",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};
const GuidedDoctorFinder: Template<TemplateRenderProps> = ({ document }) => {
  const [geoFilter, setGeoFilter] = useState("");
  const [insuranceFilter, setInsuranceFilter] = useState("");
  const [selectedInsurance, setSelectedInsurance] = useState("");
  const [selectedCareType, setSelectedCareType] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const executeSearch = () => {
      window.location.href = `/doctor-finder?${insuranceFilter}&${geoFilter}`;
    };
    if (currentStep === 5) {
      setTimeout(executeSearch, 1000);
    }
  }, [currentStep]);

  return (
    <PageLayout
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <section className="flex flex-col pt-32">
        {currentStep === 1 && (
          <section className="flex flex-col gap-8 items-center pt-20 pb-[1000px]">
            <h3 className="text-2xl font-bold">
              What kind of care are you looking for?
            </h3>
            <button
              onClick={() => {
                setSelectedCareType("Primary");
                setCurrentStep(2);
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedCareType === "Primary"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Primary care
            </button>
            <button
              onClick={() => {
                setCurrentStep(2);
                setSelectedCareType("Specialty");
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedCareType === "Specialty"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Specialty care
            </button>
            <button
              onClick={() => {
                setCurrentStep(2);
                setSelectedCareType("Urgent");
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedCareType === "Urgent"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Urgent care
            </button>
          </section>
        )}
        {currentStep === 2 && (
          <section className="flex flex-col gap-8 items-center pt-20 pb-96">
            <h3 className="text-2xl font-bold">
              What type of insurance do you have?
            </h3>
            <button
              onClick={() => {
                setInsuranceFilter(`sf_insuranceAccepted=Medicare`);
                setSelectedInsurance("Medicare");
                setCurrentStep(3);
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedInsurance === "Medicare"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Medicare
            </button>
            <button
              onClick={() => {
                setInsuranceFilter(`sf_insuranceAccepted=Medicaid`);
                setSelectedInsurance("Medicaid");
                setCurrentStep(3);
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedInsurance === "Medicaid"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Medicaid
            </button>
            <button
              onClick={() => {
                setInsuranceFilter(`sf_insuranceAccepted=Medicare+Advantage`);
                setSelectedInsurance("Medicare Advantage");
                setCurrentStep(3);
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedInsurance === "Medicare Advantage"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Medicare Advantage
            </button>
            <button
              onClick={() => {
                setSelectedInsurance("Other");
                setCurrentStep(3);
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedInsurance === "Other"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Employer-based / Other
            </button>
          </section>
        )}
        {currentStep === 3 && (
          <section className="flex flex-col gap-8 items-center pt-20 pb-[1000px]">
            <h3 className="text-2xl font-bold">
              Where would you like to receive care?
            </h3>
            <FilterSearch
              placeholder="Search for a city, state, or zip code"
              customCssClasses={{
                filterSearchContainer: "flex justify-center",
                inputElement:
                  "rounded-full px-8 py-4 border-zinc-900 text-base placeholder:text-neutral-500 w-96 h-full",
                option: "py-2 px-4",
                highlighted: "font-bold text-base",
                nonHighlighted: "text-base",
                sectionLabel: "text-lg",
              }}
              onSelect={(params) => {
                const { fieldId, matcher, value } = params.newFilter;
                const newFilterParam = `sf_${fieldId}=${value}`;
                setGeoFilter(newFilterParam);
                setCurrentStep(4);
              }}
              searchFields={[
                {
                  fieldApiName: "builtin.location",
                  entityType: "healthcareProfessional",
                },
              ]}
            />
          </section>
        )}
        {currentStep === 4 && (
          <section className="flex flex-col gap-8 items-center pt-20 pb-[1000px]">
            <h3 className="text-2xl font-bold">
              When would you like to see the doctor?
            </h3>
            <button
              onClick={() => {
                setCurrentStep(5);
                setSelectedTime("Now");
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedTime === "Now"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              As soon as possible
            </button>
            <button
              onClick={() => {
                setCurrentStep(5);
                setSelectedTime("Week");
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedTime === "Week"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Within the next week
            </button>
            <button
              onClick={() => {
                setCurrentStep(5);
                setSelectedTime("Month");
              }}
              className={`text-xl py-4 px-8 border rounded-full w-80 ${
                selectedTime === "Month"
                  ? "bg-green-900 text-white"
                  : "border-zinc-900 hover:bg-green-700 hover:text-white hover:border-green-700"
              }`}
            >
              Within the next month
            </button>
          </section>
        )}
        {currentStep === 5 && (
          <section className="flex flex-col gap-8 items-center pt-20 pb-[1000px]">
            <h3 className="text-2xl font-bold">
              One moment, searching for providers that match your criteria...
            </h3>

            <div role="status">
              <svg
                aria-hidden="true"
                className="w-24 h-24 mr-2 text-zinc-900 animate-spin fill-green-700"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </section>
        )}
      </section>
    </PageLayout>
  );
};

export default GuidedDoctorFinder;
