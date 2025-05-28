"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );
  return (
    <div className="pb-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        key={product.slug}
        className="relative flex justify-center mb-4"
      >
        <div className="w-full max-w-3xl aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
          <Image
            src={activeImage}
            alt="thumbnail"
            fill
            className="object-cover object-center rounded-xl"
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </motion.div>

      <div className="flex flex-row justify-center gap-3 mb-4 overflow-x-auto pb-2">
        {product.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
            className={`flex-shrink-0 border-2 rounded-lg transition-all duration-200 focus:outline-none hover:scale-105 ${activeImage === image ? "border-purple-500 shadow-lg" : "border-gray-200 dark:border-gray-700"}`}
          >
            <Image
              src={image}
              alt="product thumbnail"
              width={96}
              height={60}
              className="object-cover object-center rounded-lg w-20 h-14 md:w-28 md:h-18"
            />
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
          <Heading className="font-black text-2xl md:text-3xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {product.title}
          </Heading>
          <div className="flex flex-wrap gap-2">
            {product.stack?.map((stack: string) => (
              <span
                key={stack}
                className="text-sm bg-gradient-to-br from-white/60 via-purple-50/40 to-blue-50/40 dark:from-purple-900/30 dark:via-black/40 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-medium border border-purple-100/50 dark:border-purple-800/50 backdrop-blur-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
          <Paragraph className="text-lg md:text-xl font-medium mb-4">
            {product.description}
          </Paragraph>
          <div className="mt-4">{product?.content}</div>
        </div>

        <div className="pt-4">
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gradient-to-r group-hover/button:from-purple-500 group-hover/button:to-blue-400 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-base font-medium px-5 py-2"
          >
            View Live Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
