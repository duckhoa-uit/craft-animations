"use client";

import React from "react";

const ScrollToTopButton = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className="hover:white flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-light-900 transition-colors duration-200 hover:bg-light-500 hover:dark:bg-dark-500 dark:hover:text-dark-1000 dark:text-dark-900 hover:text-light-1000"
      aria-label="Scroll to top"
      type="button"
      onClick={scrollToTop}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Scroll to top</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4.45l6.275 6.275-.884.884-4.766-4.767V19.5h-1.25V6.842L6.608 11.61l-.883-.884L12 4.449z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
