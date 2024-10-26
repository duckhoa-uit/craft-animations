import ComponentShowcase from "@/components/component-showcase";
import DynamicSettings from "@/components/crafts/dynamic-settings";
import Header from "@/components/header";
import LaravelHero from "@/components/crafts/laravel-hero";
import CardReveal from "@/components/crafts/card-reveal";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col">
      <Header />
      <div className="mt-40 flex w-full flex-col gap-10">
        <ComponentShowcase
          meta={{
            name: "Dynamic Settings",
            description:
              "Experimenting how a two-step popover can be implemented and getting a feeling of the transition. Not quite there yet but hey, all of this is experimental.",
            tags: ["react", "tailwindcss", "framer-motion"],
          }}
        >
          <DynamicSettings />
        </ComponentShowcase>
        <ComponentShowcase
          meta={{
            name: "Laravel Cloud's new hero",
            description:
              "Re-create Laravel Cloud's new hero. This is a great example of how to create reveal animations with Framer Motion.",
            tags: ["react", "tailwindcss", "framer-motion"],
          }}
        >
          <LaravelHero />
        </ComponentShowcase>
        <ComponentShowcase
          meta={{
            name: "Buildshit #1",
            description:
              "Practice animation with challenge from Buildshit. This is a great example of how to create reveal animations with Framer Motion.",
            tags: ["react", "tailwindcss", "framer-motion"],
          }}
        >
          <CardReveal />
        </ComponentShowcase>
        <ComponentShowcase
          meta={{
            name: "Buildshit #1",
            description:
              "Practice animation with challenge from Buildshit. This is a great example of how to create reveal animations with Framer Motion.",
            tags: ["react", "tailwindcss", "framer-motion"],
          }}
        >
          <button
            type="button"
            className="relative flex items-center justify-center rounded-full border-2 border-[#AF3DFF] bg-gradient-to-b from-[#8D22E1] to-[#F043FF] px-4 py-2 font-light text-white shadow-[0px_5px_11px_0px_#72167B] before:absolute before:inset-0 before:rounded-full before:shadow-[inset_0_-4px_6px_2px_#AF3DFF] before:content-['']"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 80"
                x="0px"
                y="0px"
                className="h-6 w-6 fill-white"
              >
                <title>Blink</title>
                <g>
                  <path d="M37.93,39.9S24.37,41.84,21.46,56.37C18.56,41.84,5,39.9,5,39.9S18.56,38,21.46,23.44C24.37,38,37.93,39.9,37.93,39.9Zm9.22-21.73A14.83,14.83,0,0,1,35.29,30,14.85,14.85,0,0,1,47.15,41.88,14.83,14.83,0,0,1,59,30,14.81,14.81,0,0,1,47.15,18.17ZM28.71,7.63a9.9,9.9,0,0,1-7.91,7.91,9.89,9.89,0,0,1,7.91,7.9,9.88,9.88,0,0,1,7.9-7.9A9.88,9.88,0,0,1,28.71,7.63Z" />
                </g>
              </svg>
            </span>
            <span className="leading-6">Generate</span>
          </button>
        </ComponentShowcase>
      </div>
    </main>
  );
}
