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
    <section className="w-full py-12">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/20 via-transparent to-transparent" />

        {/* Accent Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent dark:via-purple-400"
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
        <div className="space-y-8">
          {products.map((product: Product, idx: number) => (
            <motion.div
              key={product.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Image Container */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: "center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                    <div className="space-y-4">
                      <Heading
                        as="h4"
                        className="font-bold text-2xl md:text-3xl text-gray-900 group-hover:text-purple-600 transition-colors"
                      >
                        {product.title}
                      </Heading>
                      <Paragraph className="text-base md:text-lg text-gray-600">
                        {product.description}
                      </Paragraph>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.stack?.map((stack: string) => (
                          <span
                            key={stack}
                            className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium border border-purple-100"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <motion.a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors shadow-sm hover:shadow-md"
                        >
                          <IconExternalLink className="w-5 h-5" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={`https://github.com/swastideep-maharana/${product.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm hover:shadow-md"
                        >
                          <IconBrandGithub className="w-5 h-5" />
                          Source Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
