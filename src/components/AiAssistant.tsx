"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { IconMessageDots, IconX, IconSend, IconLoader2, IconSparkles, IconInfoCircle } from "@tabler/icons-react";
import { askAiAssistant } from "@/app/actions/aiAssistant";
import { twMerge } from "tailwind-merge";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Simple Markdown-style parser for Bold and Lists
const FormattedText = ({ text }: { text: string }) => {
  const lines = text.split('\n');
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        // Handle bold text
        const processedLine = line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        // Handle bullet points
        if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
          return (
            <div key={i} className="flex gap-2 pl-2">
              <span className="text-orange-500">•</span>
              <span>{processedLine.slice(1)}</span>
            </div>
          );
        }
        return <p key={i}>{processedLine}</p>;
      })}
    </div>
  );
};

interface AiAssistantProps {
  hideBubble?: boolean;
}

export const AiAssistant = ({ hideBubble }: AiAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Swastideep's AI assistant. Ask me anything about his **Full Stack** skills, latest projects, or work history!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Magnetic Bubble Logic (Only used when bubble is NOT hidden)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isOpen || hideBubble) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Check if mouse is within 100px of bubble
    if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
      mouseX.set(distanceX * 0.4);
      mouseY.set(distanceY * 0.4);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener('toggle-ai', handleToggle);
    
    if (hideBubble) return () => {
        window.removeEventListener('toggle-ai', handleToggle);
    };
    
    // Show tooltip after 5 seconds on first load
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => {
        window.removeEventListener('toggle-ai', handleToggle);
        clearTimeout(timer);
    };
  }, [hideBubble]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isLoading, displayedText, scrollToBottom, isOpen]);

  // Typing Simulation Effect
  const simulateTyping = (text: string) => {
    setIsTyping(true);
    setDisplayedText("");
    let i = 0;
    const words = text.split(" ");
    
    const interval = setInterval(() => {
      if (i < words.length) {
        setDisplayedText((prev) => (prev ? prev + " " + words[i] : words[i]));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: "assistant", content: text }]);
        setDisplayedText("");
      }
    }, 40); // 40ms per word for natural feel
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);
    setShowTooltip(false);

    try {
      const response = await askAiAssistant(newMessages);
      setIsLoading(false);
      simulateTyping(response);
    } catch (error) {
      setIsLoading(false);
      setMessages([...newMessages, { role: "assistant" as const, content: "Sorry, I'm having trouble connecting right now. Please try again later!" }]);
    }
  };

  const QuickReply = ({ text }: { text: string }) => (
    <button
      onClick={() => {
        setInput(text);
        handleSubmit();
      }}
      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 text-[11px] font-medium text-neutral-400 hover:text-orange-500 transition-all duration-300"
    >
      {text}
    </button>
  );

  return (
    <div className={twMerge(
        "fixed z-[60]",
        hideBubble 
            ? "bottom-24 right-4 w-[calc(100vw-2rem)] max-w-[450px]" 
            : "bottom-6 left-6 md:left-auto md:right-6"
    )}>
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: hideBubble ? "bottom right" : "bottom left" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className={twMerge(
                "relative h-[550px] sm:h-[600px] rounded-[32px] backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden bg-neutral-950/80",
                hideBubble ? "w-full" : "w-[calc(100vw-3rem)] sm:w-[400px] max-w-[400px]"
            )}
          >
            {/* 2026 Mesh Gradient Polish */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/30 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
            </div>

            {/* Header */}
            <div className="p-5 border-b border-white/10 bg-white/5 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white">
                        <IconSparkles size={20} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-neutral-950 rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-none">Ask Swastideep</h3>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-black flex items-center gap-1 mt-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    AI Assistant
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
              >
                <IconX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
                data-lenis-prevent
                className="flex-1 overflow-y-auto p-5 space-y-6 relative z-10 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={twMerge(
                    "flex flex-col max-w-[85%]",
                    msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div 
                    className={twMerge(
                      "px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed shadow-sm",
                      msg.role === "user" 
                        ? "bg-orange-500 text-white rounded-tr-none shadow-orange-500/10" 
                        : "bg-white/5 text-neutral-300 border border-white/10 rounded-tl-none"
                    )}
                  >
                    <FormattedText text={msg.content} />
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Simulation Overlay */}
              {isTyping && (
                <div className="mr-auto items-start max-w-[85%] flex">
                    <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none text-[13.5px] text-neutral-300 leading-relaxed">
                        <FormattedText text={displayedText} />
                        <span className="inline-block w-1 h-4 ml-1 bg-orange-500 animate-pulse align-middle" />
                    </div>
                </div>
              )}

              {isLoading && (
                <div className="mr-auto items-start max-w-[85%] flex">
                   <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex items-center gap-3">
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" />
                        </div>
                        <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-tighter">Analyzing Resume...</span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer / Input */}
            <div className="p-5 space-y-4 bg-white/5 border-t border-white/10 relative z-10">
              {!isTyping && !isLoading && (
                <div className="flex flex-wrap gap-2">
                  <QuickReply text="Key Experience?" />
                  <QuickReply text="Core Tech Stack?" />
                  <QuickReply text="Latest Projects?" />
                </div>
              )}
              <form onSubmit={handleSubmit} className="relative group/form">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 pr-14 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-orange-500 rounded-xl text-white hover:scale-105 active:scale-95 disabled:opacity-30 disabled:scale-100 transition-all duration-300 shadow-lg shadow-orange-500/20"
                >
                  <IconSend size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standalone Bubble (Only if NOT controlled) */}
      {!hideBubble && (
        <div className="relative group">
            <AnimatePresence>
                {showTooltip && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="absolute bottom-2 left-[70px] md:left-auto md:right-[70px] whitespace-nowrap px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-2xl shadow-xl flex items-center gap-2 pointer-events-none"
                    >
                        Hey! 👋 Ask me anything!
                        <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-orange-500 md:left-auto md:right-[-4px] md:border-r-0 md:border-l-[6px] md:border-l-orange-500" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowTooltip(false);
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: translateX, y: translateY }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-orange-500/50 transition-shadow duration-300 relative overflow-hidden"
            >
                <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                    >
                    <IconX size={30} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="open"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        className="relative flex items-center justify-center"
                    >
                        <IconMessageDots size={30} />
                    </motion.div>
                )}
                </AnimatePresence>
                
                {/* Glowing Ring */}
                {!isOpen && (
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping opacity-20" />
                )}
            </motion.button>
        </div>
      )}
    </div>
  );
};

