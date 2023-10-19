interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "cta";
  href: string;
}

export default function Button({ children, color, href }: ButtonProps) {
  const colorVariants = {
    cta: "bg-cta-green",
    primary: "bg-primary-green",
  };

  const hoverColorVariants = {
    cta: "hover:bg-primary-green",
    primary: "hover:bg-cta-green",
  };

  return (
    <a href={href}>
      <button
        className={`flex w-fit items-center gap-2 rounded-full py-4 px-8 ${colorVariants[color]} ${hoverColorVariants[color]} hover:cursor-pointer text-white text-base font-bold`}
      >
        {children}
      </button>
    </a>
  );
}
