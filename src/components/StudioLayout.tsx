import { HexColor } from "@yext/studio";
import * as React from "react";
import Header from "./StudioHeader";

export interface LayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  includeSearch?: boolean;
}

export default function Layout({
  children,
  backgroundColor,
  includeSearch,
}: LayoutProps) {
  return (
    <div className={`min-h-screen relative`} style={{ backgroundColor }}>
      <Header
        backgroundColor="#EDF0EB"
        iconName="home"
        includeSearch={includeSearch}
      />
      <main className="pt-[200px] lg:pt-[100px]">{children}</main>
    </div>
  );
}
