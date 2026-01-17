import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/context/ProgressContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CareerCampus - Your CSE Career Roadmap",
  description: "Pick a career path and get a gamified roadmap with progress tracking, XP, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 dark:bg-gray-900">
        <ProgressProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </ProgressProvider>
      </body>
    </html>
  );
}
