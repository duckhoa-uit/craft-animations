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
      </div>
    </main>
  );
}
