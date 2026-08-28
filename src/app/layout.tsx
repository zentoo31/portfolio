import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/os/topBar";
import Sidebar from "@/components/os/sidebar";

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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex min-h-screen flex-col bg-bg-def text-text-def">
          <TopBar />
          <div className="flex flex-1 flex-col lg:flex-row">
            <Sidebar />
            <section className="flex-1 p-4 sm:p-6 lg:p-8">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
