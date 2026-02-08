"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full transition-colors duration-300
                 bg-[color:var(--foreground)]"
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full flex items-center justify-center
                    transition-transform duration-300
                    bg-[color:var(--background)]
                    ${isDark ? "translate-x-6" : "translate-x-0"}`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
