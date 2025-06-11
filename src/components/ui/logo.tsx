import * as React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple geometric logo for placeholder */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="10" fill="none" />
      <path d="M50 20 L70 70 L30 70 Z" fill="currentColor" />
    </svg>
  );
}
