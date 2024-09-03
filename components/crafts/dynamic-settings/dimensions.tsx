import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";

const Dimensions = ({ onSubmit }: { onSubmit: () => void }) => {
	const [vertical, setVertical] = useState([50]);
	const [horizontal, setHorizontal] = useState([50]);
	const [scale, setScale] = useState([50]);

	return (
		<form className="flex flex-col gap-3 text-white">
			<fieldset className="group flex items-center justify-between gap-3">
				<label className="select-none font-normal text-[#8B8B8B] group-hover:text-white">
					Vertical
				</label>
				<div className="w-3/5">
					<div className="flex flex-grow items-center gap-2">
						<div className="flex h-7 w-12 items-center justify-center rounded-md bg-white/5 text-sm dark:bg-dark-supertransparent">
							{vertical[0]}
						</div>
						<div className="group w-full touch-none select-none transition-[margin] active:cursor-grabbing hover:cursor-grab *:duration-300">
							<Slider
								value={vertical}
								onValueChange={setVertical}
								max={100}
								step={1}
							/>
						</div>
					</div>
				</div>
			</fieldset>

			<fieldset className="group flex items-center justify-between gap-3">
				<label className="select-none font-normal text-[#8B8B8B] group-hover:text-white">
					Horizontal
				</label>
				<div className="w-3/5">
					<div className="flex flex-grow items-center gap-2">
						<div className="flex h-7 w-12 items-center justify-center rounded-md bg-white/5 text-sm dark:bg-dark-supertransparent">
							{horizontal[0]}
						</div>
						<div className="group w-full touch-none select-none transition-[margin] active:cursor-grabbing hover:cursor-grab *:duration-300">
							<Slider
								value={horizontal}
								onValueChange={setHorizontal}
								max={100}
								step={1}
							/>
						</div>
					</div>
				</div>
			</fieldset>

			<fieldset className="group flex items-center justify-between gap-3">
				<label className="select-none font-normal text-[#8B8B8B] group-hover:text-white">
					Upscale
				</label>
				<div className="w-3/5">
					<div className="flex flex-grow items-center gap-2">
						<div className="flex h-7 w-12 items-center justify-center rounded-md bg-white/5 text-sm dark:bg-dark-supertransparent">
							{scale[0]}
						</div>
						<div className="group w-full touch-none select-none transition-[margin] active:cursor-grabbing hover:cursor-grab *:duration-300">
							<Slider
								value={scale}
								onValueChange={setScale}
								max={100}
								step={1}
							/>
						</div>
					</div>
				</div>
			</fieldset>

			<div className="flex items-center justify-between pt-2">
				<div className="flex items-center gap-2 pl-1">
					<div className="h-[6px] w-[6px] rounded-full bg-[#FDFF79]" />
					<p className="text-[#8B8B8B] text-[13px]">Changes</p>
				</div>
				<button
					type="button"
					className="self-end rounded-lg bg-[#FDFF79] px-2 py-[6px] font-medium text-[#141612] transition-colors duration-200 hover:bg-[#EDF067]"
					onClick={onSubmit}
				>
					Apply Changes
				</button>
			</div>
		</form>
	);
};

export default Dimensions;
