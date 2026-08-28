"use client"
import { CpuIcon } from "lucide-react";
import Clock from "../ui/clock";
import { motion } from "motion/react";
export default function TopBar() {
  return (
    <div className="bg-bg-2 p-4 border-b-1 border-[#1F2128] flex flex-row justify-between font-mono">
      <div
        className="flex flex-row gap-2 text-center">
        <CpuIcon className="w-5" color = "#00FF66"/>
        <span>D.A.P.C. SYSTEM v7.30</span>
      </div>

      <div className="text-text-description">
        IP: 192.168.19.12
      </div>

      <div className="flex flex-row items-center gap-2 text-text-description">
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
        <span>SYS_ONLINE // <Clock/> </span>
      </div>
    </div>
  );
}
