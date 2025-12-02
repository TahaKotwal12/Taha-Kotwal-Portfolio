import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taha Kotwal - Full Stack Developer",
  description:
    "Full Stack Developer specializing in FastAPI, Spring Boot, React, and AI/ML solutions. Building scalable SaaS applications and AI-driven tools.",
  keywords: [
    "Full Stack Developer",
    "FastAPI",
    "Spring Boot",
    "React",
    "TypeScript",
    "AI/ML",
    "Python",
    "Java",
    "Web Development",
  ],
  authors: [{ name: "Taha Kotwal" }],
  creator: "Taha Kotwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tahakotwal.com",
    title: "Taha Kotwal - Full Stack Developer",
    description:
      "Full Stack Developer specializing in FastAPI, Spring Boot, React, and AI/ML solutions.",
    siteName: "Taha Kotwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Kotwal - Full Stack Developer",
    description:
      "Full Stack Developer specializing in FastAPI, Spring Boot, React, and AI/ML solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
