import { HexColor } from "@yext/studio";
import * as React from "react";
import SearchHeader from "./SearchHeader";
import { provideHeadless } from "@yext/search-headless-react";
import SearchHeadlessProvider from "./search/SearchHeadlessProvider";
import { defaultRouter } from "../routing";
import Header from "./Header";
import { Address } from "../types/autogen";

export interface LayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  includeSearch?: boolean;
  featuredLocations?: {
    name: string;
    address: Address;
    slug: string;
  }[];
  featuredSpecialties?: {
    name: string;
    slug: string;
  }[];
}

const searcher = provideHeadless({
  apiKey: YEXT_PUBLIC_SEARCH_API_KEY,
  experienceKey: "find-a-doc-specialties",
  locale: "en",
  verticalKey: "healthcare_professionals",
});

export default function Layout({
  children,
  backgroundColor,
  includeSearch,
  featuredLocations,
  featuredSpecialties,
}: LayoutProps) {
  return (
    <SearchHeadlessProvider searcher={searcher} routing={defaultRouter}>
      <div className={`min-h-screen relative`} style={{ backgroundColor }}>
        {includeSearch ? (
          <SearchHeader backgroundColor="#EDF0EB" iconName="home" />
        ) : (
          <Header
            locations={featuredLocations}
            specialties={featuredSpecialties}
          />
        )}
        <main>{children}</main>
      </div>
    </SearchHeadlessProvider>
  );
}
