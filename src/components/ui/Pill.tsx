import { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function Pill({ children, href, className = "" }: PillProps) {
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={`pill ${className}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <span className={`pill ${className}`}>{children}</span>;
}