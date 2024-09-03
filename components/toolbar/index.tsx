import React from "react";
import dynamic from "next/dynamic";
import ScrollToTopButton from "./scroll-to-top";

const SetThemeButton = dynamic(() => import("../theme-toggle"), {
  ssr: false,
  // Make sure to code a placeholder so the UI doesn't jump when the component loads
  loading: () => <div className="h-8 w-8" />,
});

const Toolbar = () => {
  return (
    <div
      className="toolbar -translate-x-1/2 fixed bottom-5 z-20 inline-flex max-h-12 items-center gap-2 overflow-hidden rounded-full bg-light-toolbar-light py-4 pr-2 pl-4 font-sans shadow-lg dark:bg-dark-toolbar-dark"
      style={{ transform: "none" }}
    >
      <div className="mr-1 text-light-900 text-sm selection:bg-light-accent selection:dark:bg-dark-accent dark:selection:text-dark-200 dark:text-dark-900 selection:text-light-200">
        12 Components
      </div>
      <div className="h-6 w-px rounded-full bg-black/5 dark:bg-white/5" />
      <div className="inline-flex gap-[2px]">
        <div className="IconButton" data-state="closed">
          <ScrollToTopButton />
        </div>
        <div className="IconButton" data-state="closed">
          <button
            className="hover:white flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-light-900 transition-colors duration-200 hover:bg-light-500 hover:dark:bg-dark-500 dark:hover:text-dark-1000 dark:text-dark-900 hover:text-light-1000"
            aria-label="Scroll to top"
            type="button"
          >
            <a
              href="https://twitter.com/duckhoadotdev"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>

                <path d="M14.773 2.5h2.545l-5.56 6.354 6.54 8.646h-5.12l-4.01-5.244-4.59 5.244H2.032l5.946-6.796L1.704 2.5h5.25l3.626 4.793L14.773 2.5zm-.893 13.477h1.41L6.19 3.943H4.676l9.204 12.034z" />
              </svg>
            </a>
          </button>
        </div>
        <div className="IconButton" data-state="closed">
          <div className="block md:hidden">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rmv9bqda:"
              data-state="closed"
              className="select-none outline-none"
            >
              <div
                className="hover:white flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-light-900 transition-colors duration-200 hover:bg-light-500 hover:dark:bg-dark-500 dark:hover:text-dark-1000 dark:text-dark-900 hover:text-light-1000"
                aria-label="Subscribe"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Email</title>

                  <path
                    d="M3.13 3.332c-.805 0-1.458.653-1.458 1.458v.867l8.24 4.146c.058.03.128.03.187 0l8.24-4.146V4.79c0-.805-.653-1.458-1.459-1.458H3.13z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.338 7.059l-7.677 3.863a1.458 1.458 0 01-1.311 0L1.672 7.059v8.15c0 .806.653 1.46 1.458 1.46h13.75c.806 0 1.459-.654 1.459-1.46V7.06z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="hidden md:block">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R16v9bqda:"
              data-state="closed"
            >
              <div
                className="hover:white flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-light-900 transition-colors duration-200 hover:bg-light-500 hover:dark:bg-dark-500 dark:hover:text-dark-1000 dark:text-dark-900 hover:text-light-1000"
                aria-label="Subscribe"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Switch theme</title>

                  <path
                    d="M3.13 3.332c-.805 0-1.458.653-1.458 1.458v.867l8.24 4.146c.058.03.128.03.187 0l8.24-4.146V4.79c0-.805-.653-1.458-1.459-1.458H3.13z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.338 7.059l-7.677 3.863a1.458 1.458 0 01-1.311 0L1.672 7.059v8.15c0 .806.653 1.46 1.458 1.46h13.75c.806 0 1.459-.654 1.459-1.46V7.06z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="IconButton" data-state="closed">
          <SetThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
