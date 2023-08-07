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
}

// const searcher = provideHeadless({
//   apiKey: "cecfca4dac59395a87f9f57766abd38e",
//   experienceKey: "find-a-doc-specialties",
//   locale: "en",
//   verticalKey: "healthcare_professionals",
// });

export default function Layout({
  children,
  backgroundColor,
  includeSearch,
  featuredLocations,
  featuredSpecialties,
}: LayoutProps) {
  return (
    // <SearchHeadlessProvider searcher={searcher} routing={defaultRouter}>
    <div className={`min-h-screen relative`} style={{ backgroundColor }}>
      <Header
        locations={featuredLocations}
        specialties={featuredSpecialties}
        includeSearch={false}
      />
      <main>{children}</main>
      <Footer />
    </div>
    // </SearchHeadlessProvider>
  );
}
