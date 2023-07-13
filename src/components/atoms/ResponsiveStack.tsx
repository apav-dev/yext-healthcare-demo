import * as React from "react";

export interface ResponsiveStackProps {
  children?: React.ReactNode;
  // className?: string;
  // direction?: "row" | "column";
  // justifyContent?: "start" | "end" | "center" | "between" | "around";
  // alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  // wrap?: "wrap" | "nowrap" | "wrap-reverse";
  // gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

// export const initialProps = {
//   direction: "row",
//   justifyContent: "start",
//   alignItems: "start",
//   wrap: "wrap",
//   gap: "none",
// };

const ResponsiveStack = ({
  children,
}: // className,
// direction,
// justifyContent,
// alignItems,
// wrap,
// gap,
ResponsiveStackProps) => {
  return <div className={`flex flex-col sm:flex-row `}>{children}</div>;
};

export default ResponsiveStack;
