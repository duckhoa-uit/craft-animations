import type { Metadata } from "next";
import "../globals.css";
import Toolbar from "@/components/toolbar";
import { cn } from "../utils";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeScript } from "next-app-theme/theme-script";

export const metadata: Metadata = {
  title: "UI laboratory of animations",
  description: "Component built by Khoa Vo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body
        className={cn(
          "pt:10 flex max-w-[1400px] flex-col items-center justify-center gap-20 bg-light-200 p-5 transition-colors md:mx-auto md:gap-56 dark:bg-dark-200 md:p-5 md:pt-12",
          GeistMono.className,
          GeistSans.className,
        )}
      >
        {children}
        <Toolbar />
      </body>
    </html>
  );
}
