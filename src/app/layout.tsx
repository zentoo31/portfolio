import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/os/sidebar";
import TopBar from "@/components/os/topBar";
import SpaceBackground from "@/components/ui/space-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego Pineda - Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-bg-def text-text-def">
        <SpaceBackground />
        <main className="relative z-10 flex min-h-screen flex-col bg-transparent text-text-def">
          <TopBar />
          <div className="flex flex-1 flex-col lg:flex-row lg:items-start">
            <Sidebar />
            <section className="relative z-10 flex-1 bg-transparent p-4 sm:p-6 lg:p-8">
              {children}
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
