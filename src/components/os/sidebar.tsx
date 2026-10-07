"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FolderIcon,
  GitBranchIcon,
  BriefcaseBusinessIcon,
  MailIcon,
  BookOpenCheckIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";

const socialLinks = [
  {
    href: "https://github.com/zentoo31",
    label: "GitHub",
    icon: GitBranchIcon,
  },
  {
    href: "https://www.linkedin.com/in/diego-pineda-53223a21a/",
    label: "LinkedIn",
    icon: BriefcaseBusinessIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: "/overview", label: t.sidebar.overview, icon: BookOpenCheckIcon },
    { href: "/projects", label: t.sidebar.projects, icon: FolderIcon },
    { href: "/contact", label: t.sidebar.contact, icon: MailIcon },
  ];

  return (
    <aside className="w-full shrink-0 self-start border-b border-[#1F2128] bg-bg-2 px-3 py-3 font-mono sm:p-4 lg:sticky lg:top-[73px] lg:z-20 lg:flex lg:h-[calc(100vh-73px)] lg:w-72 lg:flex-col lg:border-r lg:border-b-0">
      <div className="hidden sm:block">
        <span className="text-xs tracking-[0.2em] text-text-description">
          {t.sidebar.workspace}
        </span>
      </div>

      <nav className="grid grid-cols-3 gap-2 sm:mt-4 lg:grid-cols-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-11 flex-col items-center justify-center gap-1 border px-2 py-2.5 text-center text-xs transition-colors sm:min-h-12 sm:flex-row sm:gap-2 sm:px-3 sm:py-3 sm:text-sm lg:justify-start ${
                isActive
                  ? "border-text-green bg-[#0f1a13] text-text-green"
                  : "border-[#1F2128] text-text-description hover:border-text-green/50 hover:text-text-def"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="max-w-full truncate">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-3 border border-[#1F2128] bg-[#11141a] p-3 text-xs text-text-description sm:mt-4 lg:mt-auto">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-text-green" />
          <span className="truncate">{t.sidebar.visitNetworks}</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-1 border border-[#1F2128] px-2 py-2 text-xs text-text-def transition-colors hover:border-text-green hover:text-text-green"
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
