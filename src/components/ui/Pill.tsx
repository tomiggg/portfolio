import { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function Pill({ children, href, className = "" }: PillProps) {
  const Cmp: any = href ? "a" : "span";
  return (
    <Cmp href={href} className={`pill ${className}`}>
      {children}
    </Cmp>
  );
}