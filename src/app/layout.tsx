import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollWrapper } from "@/components/layout/SmoothScrollWrapper";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { Footer } from "@/components/Footer";
import { DeepAuroraBackground } from "@/components/layout/DeepAuroraBackground";
import { SamuraiEmbers } from "@/components/ui/SamuraiEmbers";

import { Toaster } from "sonner";
import { AiAssistant } from "@/components/AiAssistant";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swastideep Maharana - Portfolio",
  description: "Full Stack Developer Portfolio",
  openGraph: {
    title: "Swastideep Maharana - Full Stack Developer",
    description: "Full Stack Developer crafting elegant solutions with modern technologies",
    url: "https://swastideep-maharana.vercel.app",
    siteName: "Swastideep Maharana Portfolio",
    images: [
      {
        url: "https://swastideep-maharana.vercel.app/og?title=Swastideep%20Maharana",
        width: 1200,
        height: 630,
        alt: "Swastideep Maharana - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swastideep Maharana - Full Stack Developer",
    description: "Full Stack Developer crafting elegant solutions with modern technologies",
    images: ["https://swastideep-maharana.vercel.app/og?title=Swastideep%20Maharana"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased`}
      >

        
        <ThemeProvider>
          <DeepAuroraBackground />
          <SamuraiEmbers />
          <SmoothScrollWrapper>
            {/* Main Application Frame - The "Window" Look */}
            {/* Optimization: Increased opacity to 80% and used neutral-950 to fix 'faded' look/improve contrast */}
            <div className="p-2 sm:p-4 md:p-6 min-h-screen flex flex-col">
              <main className="flex-1 w-full relative z-10 bg-white/80 dark:bg-neutral-950/80 border border-neutral-200/50 dark:border-white/5 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-neutral-900/5 dark:ring-white/5 transition-colors duration-500">
                {children}
                <Footer />
              </main>
              <FloatingDock />
            </div>
          </SmoothScrollWrapper>
          <Toaster position="top-right" richColors />
          <AiAssistant hideBubble={true} />
        </ThemeProvider>
      </body>
    </html>
  );
}
