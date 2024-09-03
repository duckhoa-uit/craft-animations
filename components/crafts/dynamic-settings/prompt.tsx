import React from "react";

const Prompt = ({ onSubmit }: { onSubmit: () => void }) => {
	return (
		<form className="flex flex-col gap-3">
			<textarea
				placeholder="Add a new prompt"
				className="h-[120px] w-full resize-none rounded-[6px] bg-transparent px-2 py-[6px] text-sm text-white placeholder:text-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FDFF79] focus-visible:outline-offset-2"
				spellCheck="false"
				// biome-ignore lint/a11y/noAutofocus: <explanation>
				autoFocus
			/>

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

export default Prompt;
