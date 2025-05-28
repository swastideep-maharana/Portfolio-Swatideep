"use client";

import { ReactNode } from "react";
import { Container } from "@/components/Container";

interface BlogLayoutProps {
  children: ReactNode;
  meta: {
    title: string;
    description: string;
    date: string;
  };
}

export default function BlogLayout({ children, meta }: BlogLayoutProps) {
  return (
    <Container>
      <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {meta.title}
        </h1>
        <div className="text-gray-500 dark:text-gray-400 mb-8">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="mt-8 prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
          {children}
        </div>
      </article>
    </Container>
  );
}
