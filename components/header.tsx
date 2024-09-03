import React from "react";
import { cn } from "@/app/utils";
import { redactionFont } from "@/fonts";
import { GlitchedText } from "./glitched-text";


const Header = () => {
	return (
		<header
			className={cn(
				"flex w-full items-start justify-between px-4 text-light-1000 dark:text-dark-1000",
				redactionFont.className,
			)}
		>
			<div>Logo</div>
			<div className="flex flex-col items-start">
				<h1 className="font-semibold text-4xl">UI laboratory of animations</h1>
				<p className="font-medium text-2xl">
					Components built by <GlitchedText />
				</p>
			</div>
		</header>
	);
};

export default Header;
