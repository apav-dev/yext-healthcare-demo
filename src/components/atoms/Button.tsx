import CalendarIcon from "../Icons/CalendarIcon";

export interface ButtonProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ type, children }: ButtonProps) {
  const buttonMap = {
    primary: "bg-green-700",
    secondary: "bg-zinc-900",
  };

  return (
    <div
      className={`px-8 py-4 ${buttonMap[type]} rounded-full justify-center items-center gap-2 flex text-white text-base font-bold `}
    >
      {children}
    </div>
  );
}
