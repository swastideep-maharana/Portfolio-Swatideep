"use client";

import React, { useEffect, Children, useState, useRef } from "react";

// import "prism-theme-night-owl";
import clsx from "clsx";

export const CodeWindow = ({ title, children }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    // Prism.highlightAll();
  }, []);

  let child = Children.only(children);

  const [buttonText, setButtonText] = useState("Copy");
  const childRef = useRef<any>(null);

  const handleClick = (e: any) => {
    if (childRef.current) {
      const textToCopy = childRef.current.innerText;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setButtonText("Copied!");
          setTimeout(() => {
            setButtonText("Copy");
          }, 1000);
        })
        .catch((err) => {
          console.error("Error copying text to clipboard:", err);
        });
    }
  };

  return (
    isClient && (
      <div className="relative rounded-lg overflow-hidden border border-purple-100/50 dark:border-purple-900/10 shadow-lg">
        {/* Window Controls */}
        <div className="flex items-center px-4 py-2 bg-gray-50 dark:bg-black border-b border-purple-100/50 dark:border-purple-900/10">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center text-sm text-gray-500 dark:text-gray-400">
            {title}
          </div>
        </div>

        {/* Code Content */}
        <div className="relative bg-white dark:bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/5 dark:to-blue-500/5" />
          <div className="relative p-4">
            <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
              <code>{child}</code>
            </pre>
          </div>
        </div>
      </div>
    )
  );
};
