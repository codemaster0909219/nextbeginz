import { cn } from "@/components/lib/utils";
import type { ElementType, ReactNode } from "react";

interface SubheadingProps {
  as?: ElementType;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

export function Subheading({
  as: Component = "h3",
  children,
  dark = false,
  className = "",
}: SubheadingProps) {
  return (
    <Component
      className={cn(
        "text-sm font-semibold uppercase tracking-wider",
        dark ? "text-gray-400" : "text-gray-500",
        className
      )}
    >
      {children}
    </Component>
  );
}
