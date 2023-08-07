import { HexColor } from "@yext/studio";
import * as React from "react";
import SearchHeader from "./SearchHeader";
import { provideHeadless } from "@yext/search-headless-react";
import SearchHeadlessProvider from "./search/SearchHeadlessProvider";
import { defaultRouter } from "../routing";
import Header from "./Header";
import { Address } from "../types/autogen";
import Footer from "./Footer";

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
  containerClassName?: string;
}

const searcher = provideHeadless({
  apiKey: "placeholder",
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
  containerClassName,
}: LayoutProps) {
  return (
    <SearchHeadlessProvider searcher={searcher} routing={defaultRouter}>
      <div className={`min-h-screen relative`} style={{ backgroundColor }}>
        <Header
          locations={featuredLocations}
          specialties={featuredSpecialties}
          // includeSearch={false}
        />
        <main className={containerClassName}>{children}</main>
        <Footer />
      </div>
    </SearchHeadlessProvider>
  );
}
