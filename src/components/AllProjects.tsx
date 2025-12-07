"use client";
import React from "react";
import { products } from "@/constants/products";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export const AllProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
      {products.map((product, idx) => (
        <ProjectCard
          key={product.href + idx}
          product={product}
          index={idx}
          gridClass="col-span-1 h-full"
        />
      ))}
    </div>
  );
};
