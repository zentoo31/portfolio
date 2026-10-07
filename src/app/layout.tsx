import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/os/sidebar";
import TopBar from "@/components/os/topBar";
import SpaceBackground from "@/components/ui/space-background";
import { LanguageProvider } from "@/i18n/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-4x5jqskl3-zentoo31s-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Diego Pineda — Portafolio / Portfolio | Software Developer & Systems Engineering",
    template: "%s | Diego Pineda",
  },
  description:
    "Portafolio profesional de Diego Alessandro Pineda Calagua (zentoo31) — Estudiante de Ingeniería de Sistemas y desarrollador de software. Proyectos web, móviles y redes. / Professional portfolio of Diego Alessandro Pineda Calagua — Systems Engineering student and software developer.",
  applicationName: "Diego Pineda Portfolio (D.A.P.C. SYSTEM v7.30)",
  authors: [
    {
      name: "Diego Alessandro Pineda Calagua",
      url: "https://github.com/zentoo31",
    },
  ],
  creator: "Diego Alessandro Pineda Calagua",
  publisher: "Diego Alessandro Pineda Calagua",
  keywords: [
    "Diego Pineda",
    "Diego Alessandro Pineda Calagua",
    "zentoo31",
    "Portafolio",
    "Portfolio",
    "Desarrollador de Software",
    "Software Developer",
    "Ingeniería de Sistemas",
    "Systems Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Cisco CCNA",
    "CyberOps",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Diego Pineda — Portfolio (D.A.P.C. SYSTEM v7.30)",
    title:
      "Diego Pineda — Portafolio / Portfolio | Software Developer & Systems Engineering",
    description:
      "Portafolio profesional de Diego Alessandro Pineda Calagua (zentoo31) — Estudiante de Ingeniería de Sistemas y desarrollador de software. Proyectos web, móviles y redes. / Professional portfolio of Diego Alessandro Pineda Calagua — Systems Engineering student and software developer.",
    images: [
      {
        url: "/screen/portfolio_screen.png",
        width: 1920,
        height: 934,
        alt: "Diego Pineda — Portfolio D.A.P.C. SYSTEM v7.30",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Diego Pineda — Portafolio / Portfolio | Software Developer & Systems Engineering",
    description:
      "Portafolio profesional de Diego Alessandro Pineda Calagua (zentoo31) — Estudiante de Ingeniería de Sistemas y desarrollador de software. Proyectos web, móviles y redes. / Professional portfolio of Diego Alessandro Pineda Calagua — Systems Engineering student and software developer.",
    images: ["/screen/portfolio_screen.png"],
    creator: "@zentoo31",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-clip bg-bg-def text-text-def">
        <LanguageProvider>
          <SpaceBackground />
          <main className="relative z-10 flex min-h-screen min-w-0 flex-col overflow-x-clip bg-transparent text-text-def">
            <TopBar />
            <div className="flex min-w-0 flex-1 flex-col lg:flex-row lg:items-start">
              <Sidebar />
              <section className="relative z-10 min-w-0 flex-1 bg-transparent px-3 py-4 sm:p-6 lg:p-8">
                {children}
              </section>
            </div>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
