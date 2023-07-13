import * as React from "react";
import { HexColor } from "@yext/studio";
// import { TailwindSize } from "../../types/tailwind";

export interface GridContainerProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  rowCount?: number;
  columnCount?: number;
  // rowGap?: TailwindSize;
  // columnGap?: TailwindSize;
}

export const initialProps: Required<Omit<GridContainerProps, "children">> = {
  backgroundColor: "#ffffff",
  rowCount: 1,
  columnCount: 1,
  // rowGap: "0",
  // columnGap: "0",
};

export default function GridContainer({
  children,
  backgroundColor,
  rowCount,
  columnCount,
}: // rowGap,
// columnGap,
GridContainerProps) {
  const className = `grid grid-rows-${rowCount} grid-cols-${columnCount} bg-${backgroundColor}`;
  return <div className={className}>{children}</div>;
}
