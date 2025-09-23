// src/components/Section.tsx
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  padding?: "none" | "compact" | "default";
};

const PAD = {
  default: "py-12 md:py-14",  // general
  compact: "py-6 md:py-8",     // tighter
  none: "py-0",
};

export default function Section({
  children,
  className = "",
  id,
  title,
  padding = "default",
}: SectionProps) {
  return (
    <section id={id} className={`${PAD[padding]} ${className}`}>
      {title ? (
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}