export interface SectionProps {
  children?: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="py-14">
      {/* TODO: add header component */}
      {children}
    </section>
  );
}
