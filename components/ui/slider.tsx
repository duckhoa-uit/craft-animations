"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/app/utils";

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			"relative flex w-full touch-none select-none items-center group",
			className,
		)}
		{...props}
	>
		<SliderPrimitive.Track className="relative w-full grow overflow-hidden rounded-md bg-white/10 h-7 duration-300">
			<SliderPrimitive.Range className="absolute h-full bg-white/20 group-hover:bg-white/30 rounded-l transition-colors " />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="block h-7 w-4 rounded-[4px] bg-[#bdbdbd] group-hover:bg-[#ededed] shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
	</SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
