import { cn } from "../../../utils";

export interface MainProps {
  children?: React.ReactNode;
  className?: string;
}

export const initialProps: MainProps = {
  className: "",
};

const Main = ({ children, className }: MainProps) => {
  return (
    <main className={cn("max-w-[1440px] mx-auto", className)}>{children}</main>
  );
};

export default Main;
