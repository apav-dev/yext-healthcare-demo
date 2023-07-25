import { HexColor } from "@yext/studio";
import * as React from "react";
import Header from "./Header";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";

export interface LayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
}

const searcher = provideHeadless({
  apiKey: YEXT_PUBLIC_SEARCH_API_KEY,
  experienceKey: "find-a-doc-specialties",
  locale: "en",
  verticalKey: "healthcare_professionals",
});

export default function Layout({ children, backgroundColor }: LayoutProps) {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className={`min-h-screen`} style={{ backgroundColor }}>
        <Header backgroundColor="#EDF0EB" iconName="home" />
        <main className="pt-[166px]">{children}</main>
      </div>
    </SearchHeadlessProvider>
  );
}
