"use client";

import { useTheme } from "next-app-theme/use-theme";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-light-900 transition-colors duration-200 hover:bg-light-500 hover:dark:bg-dark-500 dark:hover:text-dark-1000 dark:text-dark-900 hover:text-light-1000"
      aria-label="Scroll to top"
      type="button"
    >
      <div className="h-5 w-5 rounded-full bg-[#646466] transition-all ease-out hover:bg-white" />
    </button>
  );
}
