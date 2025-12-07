"use client";
import React from "react";
import { products } from "@/constants/products";
import { ProjectCard } from "./ProjectCard";

export const Products = () => {
  // Bento Grid layout
  const getGridClass = (index: number) => {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    if (index === 1) return "md:col-span-1 md:row-span-1";
    if (index === 2) return "md:col-span-1 md:row-span-1";
    if (index === 3) return "md:col-span-2 md:row-span-1";
    if (index === 4) return "md:col-span-1 md:row-span-1";
    if (index === 5) return "md:col-span-1 md:row-span-1";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {products.slice(0, 6).map((product, idx: number) => (
        <ProjectCard
          key={product.href}
          product={product}
          index={idx}
          gridClass={getGridClass(idx)}
        />
      ))}
    </div>
  );
};
