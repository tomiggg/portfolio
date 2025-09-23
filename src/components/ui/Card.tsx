import { ReactNode } from "react";

type CardProps = {
  className?: string;
  hover?: boolean;
  children: ReactNode;
};

export default function Card({ className = "", hover, children }: CardProps) {
  return (
    <div className={`card ${hover ? "card-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}