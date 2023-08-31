import { HexColor } from "@yext/studio";
import * as React from "react";
import Header from "./Header";
import { provideHeadless } from "@yext/search-headless-react";
import SearchHeadlessProvider from "./search/SearchHeadlessProvider";
import { defaultRouter } from "../routing";

export interface LayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  includeSearch?: boolean;
}

const searcher = provideHeadless({
  apiKey: process.env.YEXT_PUBLIC_SEARCH_API_KEY,
  experienceKey: "find-a-doc-specialties",
  locale: "en",
  verticalKey: "healthcare_professionals",
});

export default function Layout({
  children,
  backgroundColor,
  includeSearch,
}: LayoutProps) {
  return (
    <SearchHeadlessProvider searcher={searcher} routing={defaultRouter}>
      <div className={`min-h-screen relative`} style={{ backgroundColor }}>
        <Header
          backgroundColor="#EDF0EB"
          iconName="home"
          includeSearch={includeSearch}
        />
        <main className="pt-[200px] lg:pt-[100px]">{children}</main>
      </div>
    </SearchHeadlessProvider>
  );
}
