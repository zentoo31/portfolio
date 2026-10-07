"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/language-provider";

export default function Clock() {
  const { t } = useLanguage();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleDateString(t.meta.clockLocale, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [t.meta.clockLocale]);

  return <span>{time}</span>;
}
