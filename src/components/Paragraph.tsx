import React from "react";
import { twMerge } from "tailwind-merge";

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={twMerge(
        "font-sans font-normal text-neutral-400 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
