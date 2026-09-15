"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileIcon,
  FolderIcon,
  GitBranchIcon,
  BriefcaseBusinessIcon,
  MailIcon,
} from "lucide-react";

const navItems = [
  { href: "/overview", label: "Overview", icon: FileIcon },
  { href: "/projects", label: "Projects", icon: FolderIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
];

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

  return (
    <aside className="shrink-0 border-b border-[#1F2128] bg-bg-2 p-4 font-mono lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-b-0">
      <div>
        <span className="text-xs tracking-[0.2em] text-text-description">
          WORKSPACE
        </span>
      </div>

      <nav className="mt-4 grid grid-cols-3 gap-2 lg:grid-cols-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-center gap-2 border px-3 py-3 text-center text-sm transition-colors lg:justify-start ${
                isActive
                  ? "border-text-green bg-[#0f1a13] text-text-green"
                  : "border-[#1F2128] text-text-description hover:border-text-green/50 hover:text-text-def"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 border border-[#1F2128] bg-[#11141a] p-3 text-xs text-text-description lg:mt-auto">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-text-green" />
          Visita mis redes
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 border border-[#1F2128] px-2 py-2 text-xs text-text-def transition-colors hover:border-text-green hover:text-text-green"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
