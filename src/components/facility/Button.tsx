interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "cta" | "secondary";
  href: string;
}

export default function Button({ children, color, href }: ButtonProps) {
  const colorVariants = {
    cta: "bg-cta-green text-white",
    primary: "bg-primary-green text-white",
    secondary: "bg-white border border-neutral-800 text-black"
  };

  const hoverColorVariants = {
    cta: "hover:bg-primary-green",
    primary: "hover:bg-cta-green",
    secondary: "hover:bg-light-green"
  };

  return (
    <a href={href}>
      <button
        className={`flex w-fit items-center gap-2 rounded-full py-4 px-8 ${colorVariants[color]} ${hoverColorVariants[color]} hover:cursor-pointer text-base font-bold`}
      >
        {children}
      </button>
    </a>
  );
}
