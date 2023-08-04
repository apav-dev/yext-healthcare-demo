interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
}

export default function Button({ children, color }: ButtonProps) {
  const colorVariants = {
    primary: "bg-[#3B8257]",
    secondary: "bg-[#1A1A1A]",
  };

  return (
    <button
      className={`flex max-sm:w-fit items-center gap-2 rounded-full py-4 px-12 ${colorVariants[color]} hover:cursor-pointer text-white font-sans-bold`}
    >
      {children}
    </button>
  );
}
