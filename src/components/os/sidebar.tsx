"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileIcon, FolderIcon, MailIcon } from "lucide-react";

const navItems = [
  { href: "/overview", label: "Overview", icon: FileIcon },
  { href: "/projects", label: "Projects", icon: FolderIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="shrink-0 border-b border-[#1F2128] bg-bg-2 p-4 font-mono lg:w-64 lg:border-b-0 lg:border-r">
      <span className="text-text-description">WORKSPACE</span>
      <nav className="mt-4 grid grid-cols-3 gap-2 lg:flex lg:flex-col lg:gap-4">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-2 rounded px-2 py-3 text-center transition-colors lg:flex-row lg:justify-start lg:gap-4 lg:py-1 ${
                isActive
                  ? "text-text-green"
                  : "text-text-description hover:text-text-def"
              }`}
            >
              <Icon
                className="w-5 rounded bg-gray-700"
                color={isActive ? "#00FF66" : "gray"}
              />
              <span className="text-xs sm:text-sm lg:text-base">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
