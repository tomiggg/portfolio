import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href = "#",
  children,
  variant = "ghost",
  className = "",
}: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "";
  return (
    <a href={href} className={`btn ${variantClass} ${className}`}>
      {children}
    </a>
  );
}