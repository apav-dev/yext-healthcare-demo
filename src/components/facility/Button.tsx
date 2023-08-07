interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
}

export default function Button({ children, color }: ButtonProps) {
  const colorVariants = {
    primary: "bg-green-700",
    secondary: "bg-zinc-900",
  };

  const hoverColorVariants = {
    primary: "hover:bg-green-900",
    secondary: "hover:bg-neutral-500",
  };

  return (
    <button
      className={`flex w-fit items-center gap-2 rounded-full py-4 px-8 ${colorVariants[color]} ${hoverColorVariants[color]} hover:cursor-pointer text-white text-base font-bold`}
    >
      {children}
    </button>
  );
}
