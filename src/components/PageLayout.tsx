import { HexColor } from "@yext/studio";
import * as React from "react";
import SearchHeader from "./SearchHeader";
import { provideHeadless } from "@yext/search-headless-react";
import SearchHeadlessProvider from "./search/SearchHeadlessProvider";
import { defaultRouter } from "../routing";
import Header from "./Header";
import { Address } from "../types/autogen";
import Footer from "./Footer";
import {
  ChatHeadlessProvider,
  HeadlessConfig,
} from "@yext/chat-headless-react";
import { ChatPanel, ChatPopUp } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";

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
  apiKey: import.meta.env.YEXT_PUBLIC_SEARCH_API_KEY,
  experienceKey: "find-a-doc-specialties",
  locale: "en",
  verticalKey: "healthcare_professionals",
});

const chatConfig: HeadlessConfig = {
  apiKey: import.meta.env.YEXT_PUBLIC_CHAT_API_KEY,
  botId: "veridian-health-chat",
};

export default function Layout({
  children,
  backgroundColor,
  includeSearch,
  featuredLocations,
  featuredSpecialties,
  containerClassName,
}: LayoutProps) {
  return (
    <ChatHeadlessProvider config={chatConfig}>
      <SearchHeadlessProvider searcher={searcher} routing={defaultRouter}>
        <div
          className={`min-h-screen relative flex flex-col justify-between`}
          style={{ backgroundColor }}
        >
          <Header
            locations={featuredLocations}
            specialties={featuredSpecialties}
            // includeSearch={false}
          />
          <main className={containerClassName}>{children}</main>
          <div>
            <Footer />
            <ChatPopUp
              customCssClasses={{
                headerCssClasses: {
                  container: "bg-gradient-to-tr from-green-600 to-green-800",
                },
                button: "bg-gradient-to-br from-green-600 to-green-700",
                panelCssClasses: {
                  inputCssClasses: {
                    textArea: "focus:border-green-600 focus:ring-green-600",
                  },
                },
              }}
              title="Synergic Virtual Assistant"
            />
          </div>
        </div>
      </SearchHeadlessProvider>
    </ChatHeadlessProvider>
  );
}
