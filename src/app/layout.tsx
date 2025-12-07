import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollWrapper } from "@/components/layout/SmoothScrollWrapper";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { Footer } from "@/components/Footer";
import { DeepAuroraBackground } from "@/components/layout/DeepAuroraBackground";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Swastideep Maharana - Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
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
        className={`${GeistSans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <DeepAuroraBackground />
          <CustomCursor />
          <SmoothScrollWrapper>
            <main className="min-h-screen w-full relative z-10">
              {children}
            </main>
            <FloatingDock />
            <Footer />
          </SmoothScrollWrapper>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
