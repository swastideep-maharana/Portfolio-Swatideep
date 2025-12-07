"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export const CodeTerminal = () => {
  const [text, setText] = useState("");
  const fullCode = `const swastideep = {
  role: "Full Stack Developer",
  location: "India",
  skills: [
    "React.js",
    "Next.js", 
    "Node.js"
  ],
  openToWork: true,
};`;

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 30); // Speed of typing
    return () => clearInterval(interval);
  }, [fullCode]);

  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
        }}
        className="relative hidden lg:block perspective-1000"
    >
        {/* Floating Animation Wrapper */}
        <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[450px] relative"
        >
            <div className="rounded-xl overflow-hidden bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <div className="ml-4 text-xs font-medium text-neutral-400 font-mono">portfolio.tsx</div>
                </div>

                {/* Code Area */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                    <div className="flex">
                        {/* Line Numbers */}
                        <div className="flex flex-col text-neutral-600 select-none pr-4 text-right">
                            {Array.from({ length: 11 }).map((_, i) => (
                                <span key={i}>{i + 1}</span>
                            ))}
                        </div>
                        {/* Code Content */}
                        <div className="text-neutral-300 whitespace-pre">
                            <HighlightedCode code={text} />
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-orange-500 ml-1 align-middle"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Glow Effect behind */}
            <div className="absolute -inset-4 bg-orange-500/20 blur-3xl -z-10 rounded-full opacity-40" />
        </motion.div>
    </motion.div>
  );
};

// Simple syntax highlighting component
const HighlightedCode = ({ code }: { code: string }) => {
    // Basic regex replacers for coloring (very simple approximation)
    const keywords = ["const", "true", "false"];
    const strings = /"([^"]+)"/g;
    const keys = /([a-zA-Z0-9_]+):/g;

    // This is a naive implementation. For robust highlighting, react-syntax-highlighter is better, 
    // but this avoids extra dependencies for a simple snippet.
    
    // We'll just render the text directly for now to ensure stability, 
    // or we could split by newlines and color keys/values manually.
    // Given the complexity of regex in JSX without a library, we'll keep it simple but clean.
    
    return <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(code) }} />;
};

function syntaxHighlight(json: string) {
    if (!json) return "";
    let html = json
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
        .replace(/\b(const|let|var|true|false)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/([a-zA-Z0-9_]+):/g, '<span class="text-orange-400">$1:</span>');
    return html;
}
