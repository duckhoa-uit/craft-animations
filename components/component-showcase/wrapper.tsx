"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import RotateIcon from "../icons/rotate-icon";

const ComponentShowcaseWrapper = ({
  children,
  onReset,
}: { children: ReactNode; onReset: () => void }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center rounded-lg border border-light-border md:h-[640px] md:flex-1 dark:border-dark-border">
      <button
        type="button"
        onClick={onReset}
        className="absolute top-0 right-0 z-10 p-2 text-light-900 transition-colors dark:hover:text-dark-1000 hover:text-light-1000"
        title="reset"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <RotateIcon className="size-4" data-hovered={hovered} />
      </button>
      {children}
    </div>
  );
};

export default ComponentShowcaseWrapper;
