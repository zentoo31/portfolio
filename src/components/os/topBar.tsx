"use client";

import { CpuIcon } from "lucide-react";
import Clock from "../ui/clock";
import { motion } from "motion/react";

export default function TopBar() {
  return (
    <div className="flex flex-col gap-3 border-b border-[#1F2128] bg-bg-2 px-4 py-3 font-mono sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-row items-center gap-2 text-center">
        <CpuIcon className="w-5 shrink-0" color="#00FF66" />
        <span className="text-sm sm:text-base">D.A.P.C. SYSTEM v7.30</span>
      </div>

      <div className="text-sm text-text-description sm:text-base">
        IPv4 Address. . . . . . . . . . . : 192.168.18.12 
      </div>

      <div className="flex flex-row items-center gap-2 text-sm text-text-description sm:text-base">
        <motion.span
          className="h-2 w-2 shrink-0 rounded-full bg-text-green"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="whitespace-nowrap">
          SYS_ONLINE || <Clock />
        </span>
      </div>
    </div>
  );
}
