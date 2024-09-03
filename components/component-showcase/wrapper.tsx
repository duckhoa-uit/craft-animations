import { ResetIcon } from "@radix-ui/react-icons";
import React, { type ReactNode } from "react";

const ComponentShowcaseWrapper = ({
  children,
  onReset,
}: { children: ReactNode; onReset: () => void }) => {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center rounded-lg border border-light-border md:h-[640px] md:flex-1 dark:border-dark-border">
      <button type="button" onClick={onReset} className="absolute top-0 right-0 z-10 bg-light-superlight-bg p-2">
        <ResetIcon className="font-medium"/>
      </button>
      {children}
    </div>
  );
};

export default ComponentShowcaseWrapper;
