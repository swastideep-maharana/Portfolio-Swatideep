import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { TopThemeToggle } from "@/components/TopThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swastideep Maharana - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 h-full z-50">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-20 lg:ml-24">
              <main className="min-h-screen w-full px-5 py-9 md:px-8 lg:px-16 xl:px-24">
                <div className="relative">
                  {/* Background gradient effects */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50 dark:from-gray-900/5 dark:via-transparent dark:to-gray-900/5 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-gray-100/30 via-transparent to-transparent dark:from-gray-900/5 dark:via-transparent dark:to-transparent blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-100/30 via-transparent to-transparent dark:from-gray-900/5 dark:via-transparent dark:to-transparent blur-3xl pointer-events-none" />

                  {/* Content Container */}
                  <div className="relative max-w-7xl mx-auto">{children}</div>
                </div>
              </main>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="fixed top-4 right-4 z-50">
            <TopThemeToggle />
          </div>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
