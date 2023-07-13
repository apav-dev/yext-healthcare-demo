import { HexColor } from "@yext/studio";
import * as React from "react";

export interface CenteredContainerProps {
  children?: React.ReactNode;
  maxWidth?:
    | "max-w-sm"
    | "max-w-md"
    | "max-w-lg"
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
  backgroundColor?: HexColor;
}

export const initialProps = {
  maxWidth: "5xl",
};

const CenteredContainer = ({ children, maxWidth }: CenteredContainerProps) => {
  return <div className={`${maxWidth} mx-auto px-5`}>{children}</div>;
};

export default CenteredContainer;
