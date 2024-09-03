"use client";

import React, { type ReactNode } from "react";
import ComponentShowcaseWrapper from "./wrapper";

const ComponentShowcase = ({
  children,
  meta: { name, description, tags },
}: {
  children: ReactNode;
  meta: {
    name: string;
    description: string;
    tags: string[];
  };
}) => {
  const [demoKey, setDemoKey] = React.useReducer((key) => key + 1, 0);

  return (
    <div className="flex flex-col items-start font-sans md:flex-row md:gap-x-20">
      <div className="flex w-full flex-col gap-4 md:w-[256px] md:gap-9">
        <div className="flex w-full flex-col gap-3">
          <h2 className="font-medium text-light-1000 text-sm dark:selection:bg-dark-accent selection:bg-light-accent dark:selection:text-dark-200 dark:text-dark-1000 selection:text-light-200">
            {name}
          </h2>
          <p className="text-pretty text-light-900 text-sm leading-relaxed selection:bg-light-accent selection:dark:bg-dark-accent dark:text-dark-900 selection:dark:text-dark-200 selection:text-light-200">
            {description}
          </p>
          <div className="flex w-full flex-wrap gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="hover:bg w-fit cursor-default rounded-md bg-light-superlight-bg pt-[2px] pr-2 pb-[2px] pl-2 font-sans text-[12px] text-light-900 dark:bg-dark-400 dark:text-dark-900"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ComponentShowcaseWrapper key={demoKey} onReset={setDemoKey}>
        {children}
      </ComponentShowcaseWrapper>
    </div>
  );
};

export default ComponentShowcase;
