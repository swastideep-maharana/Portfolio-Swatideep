"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export const Products = () => {
  return (
    <section className="w-full py-8 sm:py-12">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-transparent to-transparent dark:from-indigo-900/10" />

        {/* Accent Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-indigo-400"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Projects Layout */}
        <div className="space-y-6 sm:space-y-8">
          {products.map((product: Product, idx: number) => (
            <motion.div
              key={product.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-indigo-100/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Image Container */}
                  <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: "center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center flex-1">
                    <div className="space-y-3 sm:space-y-4">
                      <Heading
                        as="h4"
                        className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:via-violet-600 group-hover:to-fuchsia-600 transition-colors tracking-tight"
                      >
                        {product.title}
                      </Heading>
                      <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed tracking-normal">
                        {product.description}
                      </Paragraph>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.stack?.map((stack: string) => (
                          <span
                            key={stack}
                            className="text-xs sm:text-sm bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/30 dark:to-violet-900/30 text-indigo-700 dark:text-indigo-300 px-2 sm:px-3 py-1 rounded-full font-medium border border-indigo-100/50 dark:border-indigo-900/50 tracking-normal"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        <motion.a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 text-white rounded-full font-medium hover:from-indigo-700 hover:via-violet-600 hover:to-fuchsia-600 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base tracking-normal"
                        >
                          <IconExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={`https://github.com/swastideep-maharana/${product.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors border border-indigo-200 shadow-sm hover:shadow-md text-sm sm:text-base tracking-normal"
                        >
                          <IconBrandGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                          Source Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 dark:from-indigo-500/10 dark:to-violet-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 dark:from-violet-500/10 dark:to-indigo-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
