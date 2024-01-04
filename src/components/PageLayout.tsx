import { HexColor } from "@yext/studio";
import * as React from "react";
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
import { ChatPopUp } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";

export interface LayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  locator?: boolean;
  headerLogoURL?: string;
  footerLogoURL?: string;
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
  locator,
  headerLogoURL,
  featuredLocations,
  featuredSpecialties,
  containerClassName,
  footerLogoURL,
}: LayoutProps) {
  return (
    <ChatHeadlessProvider config={chatConfig}>
      <SearchHeadlessProvider searcher={searcher} routing={defaultRouter}>
        <div
          className={`min-h-screen relative flex flex-col justify-between`}
          style={{ backgroundColor }}
        >
          <Header
            headerLogoURL={headerLogoURL}
            locations={featuredLocations}
            specialties={featuredSpecialties}
            locator={locator}
          />
          <main className={containerClassName}>{children}</main>
          <div>
            {!locator && <Footer footerLogoURL={footerLogoURL} />}
            <ChatPopUp
              customCssClasses={{
                headerCssClasses: {
                  container:
                    "bg-gradient-to-tr from-primary-green to-cta-green",
                },
                button: "bg-gradient-to-br from-primary-green to-cta-green",
                panelCssClasses: {
                  container:"h-[500px]",
                  inputCssClasses: {
                    textArea: "focus:border-green-600 focus:ring-green-600",
                  },
                },
              }}
              messageSuggestions={[
                "Can you help me find a doctor?",
                "Does Dr Smith have availability to see me?",
                "What insurance does Dr Adam Collins accept?",
                "I’m having issues understanding my bill",
                "How do I stay healthy during flu season?",
              ]}
              title="Veridian Virtual Assistant"
            />
          </div>
        </div>
      </SearchHeadlessProvider>
    </ChatHeadlessProvider>
  );
}
