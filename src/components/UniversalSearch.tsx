import {
  DirectAnswer,
  Pagination,
  ResultsCount,
  SearchBar,
  SectionProps,
  StandardCard,
  UniversalResults,
  VerticalResults,
} from "@yext/search-ui-react";
import Icon from "./atoms/Icon";
import NavBar from "./NavBar";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import Section from "./atoms/Section";
import DoctorSearchCard, { HealthPro } from "./search/DoctorSearchCard";
import { useEffect, useState } from "react";
import SpecialtyCard from "./search/SpecialtyCard";
import BlogCard from "./search/BlogCard";
import DocumentsCard from "./search/DocumentsCard";
import ListSection from "./search/ListSection";
import Faq from "../types/search/faqs";
import Ce_blogPost from "../types/search/blog_posts";
import GridSection from "./search/GridSection";
import Taxonomy_specialty from "../types/search/specialties";
import FaqCard from "./search/FaqCard";
import NoResults from "./search/NoResults";
import SearchLoading from "./search/SearchLoading";
import CustomDA from "./search/CustomDA";

export default function UniversalSearch() {
  const [resultsCountMap, setResultsCountMap] = useState<
    Record<string, number>
  >({});

  const searchActions = useSearchActions();

  const isUniveralSearch = useSearchState(
    (state) => state.meta.searchType === "universal"
  );
  const vertical = useSearchState((state) => state.vertical.verticalKey);
  const universalResults = useSearchState((state) => state.universal.verticals);
  const verticalResultCount = useSearchState(
    (state) => state.vertical.resultsCount
  );
  const searchLoading = useSearchState((state) => state.searchStatus.isLoading);

  useEffect(() => {
    const verticalKey = new URLSearchParams(window.location.search).get(
      "verticalKey"
    );
    // if there is a query in the url, add it to the search state
    const query = new URLSearchParams(window.location.search).get("query");
    if (query) {
      searchActions.setQuery(query);
    }
    if (verticalKey) {
      searchActions.setVertical(verticalKey);
      searchActions.executeVerticalQuery();
    } else {
      searchActions.setUniversal();
      searchActions.setRestrictVerticals([
        "healthcare_professionals",
        "specialties",
        "blog_posts",
        "faqs",
        "documents",
      ]);
      searchActions.executeUniversalQuery();
    }
  }, []);

  useEffect(() => {
    if (isUniveralSearch) {
      const resultsCountMap: Record<string, number> = {};
      universalResults?.forEach((vertical) => {
        resultsCountMap[vertical.verticalKey] = vertical.resultsCount;
      });
      setResultsCountMap(resultsCountMap);
    }
  }, [universalResults]);

  const da = useSearchState((state) => state.directAnswer.result);

  const handleNavBarSelect = (id: string) => {
    if (id === "all") {
      searchActions.setUniversal();
      searchActions.setRestrictVerticals([
        "healthcare_professionals",
        "specialties",
        "blog_posts",
        "faqs",
        "documents",
      ]);
      searchActions.executeUniversalQuery();
    } else {
      searchActions.setVertical(id);
      searchActions.executeVerticalQuery();
    }
  };

  const handleSearchClick = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    searchActions.setQuery(searchEventData.query || "");
    handleNavBarSelect(searchEventData.verticalKey || "all");
  };

  const determineCardComponent = () => {
    switch (vertical) {
      case "healthcare_professionals":
        return DoctorSearchCard;
      case "specialties":
        return SpecialtyCard;
      case "blog_posts":
        return BlogCard;
      case "faqs":
        return FaqCard;
      case "documents":
        return DocumentsCard;
      default:
        return StandardCard;
    }
  };

  const verticalResultsClassnames = () => {
    switch (vertical) {
      case "blog_posts":
        return "grid grid-cols-3 gap-4 ";
      case "documents":
        return "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3";
      default:
        return "flex flex-col gap-y-4";
    }
  };

  const CardComponent = determineCardComponent();

  return (
    <div className="min-h-[calc(100vh-184px)]">
      <div className="w-full bg-cta-green px-20 py-8">
        <div className="text-white mb-2">What can we help you find?</div>
        <div className="flex flex-1">
          <SearchBar
            customCssClasses={{
              searchBarContainer: "flex-1 mb-0 mr-6",
              searchButton: "hidden",
              inputDivider: "hidden",
              clearButton: "hidden",
              verticalDivider: "hidden",
              inputElement: "flex-1 pl-4",
              icon: "mx-2",
            }}
            onSearch={handleSearchClick}
          />
          <button
            className="bg-white flex justify-center items-center p-4 my-auto rounded-full "
            // onClick={handleSearchClick}
          >
            <Icon name="search" color="text-cta-green" height={"4"} width="4" />
            <p className="text-white text-sm ml-2 lg:hidden">Search</p>
          </button>
        </div>
        <div className="text-white mb-2 italic">
          Search for doctors, services, location, or ask a question.
        </div>
      </div>
      <div className="w-full bg-white">
        <NavBar
          onSelect={handleNavBarSelect}
          items={[
            {
              label: "All Results",
              id: "all",
            },
            {
              label: "Services",
              id: "specialties",
              resultsCount: resultsCountMap["specialties"] ?? 0,
            },
            {
              label: "Doctors",
              id: "healthcare_professionals",
              resultsCount: resultsCountMap["healthcare_professionals"] ?? 0,
            },
            {
              label: "Blog Posts",
              id: "blog_posts",
              resultsCount: resultsCountMap["blog_posts"] ?? 0,
            },
            {
              label: "FAQs",
              id: "faqs",
              resultsCount: resultsCountMap["faqs"] ?? 0,
            },
            {
              label: "Documents",
              id: "documents",
              resultsCount: resultsCountMap["documents"] ?? 0,
            },
          ]}
          selectedId={vertical ?? "all"}
        />
      </div>
      {!searchLoading ? (
        <>
          <Section>
            <ResultsCount
              customCssClasses={{
                resultsCountContainer: "font-sans-bold text-lg mb-0 p-0",
              }}
            />

            {da ? (
              <>
                <CustomDA data={da} />
              </>
            ) : (
              ""
            )}

            {isUniveralSearch ? (
              universalResults && universalResults.length > 0 ? (
                <UniversalResults
                  customCssClasses={{
                    universalResultsContainer: "flex flex-col gap-y-8",
                  }}
                  verticalConfigMap={{
                    healthcare_professionals: {
                      CardComponent: DoctorSearchCard,
                      SectionComponent: ({
                        results,
                        verticalKey,
                      }: SectionProps<HealthPro>) => (
                        <ListSection
                          results={results}
                          CardComponent={DoctorSearchCard}
                          verticalKey={verticalKey}
                          header={
                            <h2 className="text-2xl font-semibold text-primary-green pb-4">
                              Doctors
                            </h2>
                          }
                        />
                      ),
                    },
                    specialties: {
                      CardComponent: SpecialtyCard,
                      SectionComponent: ({
                        results,
                        verticalKey,
                      }: SectionProps<Taxonomy_specialty>) => (
                        <ListSection
                          results={results}
                          CardComponent={SpecialtyCard}
                          verticalKey={verticalKey}
                          header={
                            <h2 className="text-2xl font-semibold text-primary-green pb-4">
                              Services
                            </h2>
                          }
                        />
                      ),
                    },
                    blog_posts: {
                      CardComponent: BlogCard,
                      SectionComponent: ({
                        results,
                        verticalKey,
                      }: SectionProps<Ce_blogPost>) => (
                        <GridSection
                          results={results}
                          CardComponent={BlogCard}
                          verticalKey={verticalKey}
                          header={
                            <h2 className="text-2xl font-semibold text-primary-green pb-4">
                              Blogs
                            </h2>
                          }
                        />
                      ),
                    },
                    faqs: {
                      label: "FAQs",
                      SectionComponent: ({
                        results,
                        verticalKey,
                      }: SectionProps<Faq>) => (
                        <ListSection
                          results={results}
                          CardComponent={FaqCard}
                          verticalKey={verticalKey}
                          header={
                            <h2 className="text-2xl font-semibold text-primary-green pb-4">
                              FAQs
                            </h2>
                          }
                        />
                      ),
                      CardComponent: FaqCard,
                    },
                    documents: {
                      label: "Documents",
                      SectionComponent: ({
                        results,
                        verticalKey,
                      }: SectionProps<Faq>) => (
                        <GridSection
                          results={results}
                          CardComponent={DocumentsCard}
                          verticalKey={verticalKey}
                          header={
                            <h2 className="text-2xl font-semibold text-primary-green pb-4">
                              Documents
                            </h2>
                          }
                        />
                      ),
                      CardComponent: DocumentsCard,
                    },
                  }}
                />
              ) : (
                <NoResults />
              )
            ) : verticalResultCount && verticalResultCount > 0 ? (
              <VerticalResults
                customCssClasses={{
                  verticalResultsContainer: verticalResultsClassnames(),
                }}
                CardComponent={CardComponent}
              />
            ) : (
              <NoResults />
            )}
          </Section>
          <Pagination
            customCssClasses={{
              paginationContainer: "py-8 shadow-none",
              label: "font-pt-sans-regular border-0",
              selectedLabel:
                "font-pt-sans-bold border-0 bg-primary-green text-white",
              leftIconContainer: "border-0 px-4",
              rightIconContainer: "border-0 px-4",
            }}
          />
        </>
      ) : (
        <div>
          <SearchLoading />
        </div>
      )}
    </div>
  );
}
