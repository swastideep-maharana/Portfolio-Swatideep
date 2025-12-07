import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Swastideep Maharana - Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <main className="min-h-screen w-full">
            {children}
          </main>
          <FloatingNavbar />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
