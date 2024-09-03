"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { useOnClickOutside } from "usehooks-ts";
import AspectRatio from "./aspect-ratio";
import Dimensions from "./dimensions";
import Prompt from "./prompt";

import { cn } from "@/app/utils";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const DynamicSettings = () => {
	const [showDialog, setShowDialog] = useState(false);
	const [contentRef, { height: contentHeight, width: contentWidth }] =
		useMeasure();
	const [activeNavItem, setActiveNavItem] = useState<
		"dimensions" | "aspect-ratio" | "prompt"
	>("dimensions");

	const ref = useRef(null);
	useOnClickOutside(ref, () => setShowDialog(false));

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setShowDialog(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const content = useMemo(() => {
		switch (activeNavItem) {
			case "dimensions":
				return <Dimensions onSubmit={() => setShowDialog(false)} />;
			case "aspect-ratio":
				return <AspectRatio onSubmit={() => setShowDialog(false)} />;
			case "prompt":
				return <Prompt onSubmit={() => setShowDialog(false)} />;
			default:
				break;
		}
	}, [activeNavItem]);

	return (
		<MotionConfig transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}>
			<AnimatePresence custom={showDialog}>
				<motion.div
					animate={{
						height: contentHeight ? contentHeight : undefined,
						width: showDialog ? 360 : 110,
					}}
					className="z-10 overflow-hidden rounded-lg bg-[#141612] shadow-menu dark:shadow-inner"
				>
					<div ref={contentRef}>
						<motion.div className="group flex items-center justify-between gap-0 p-3 text-sm text-white">
							<AnimatePresence mode="popLayout" initial={false}>
								{showDialog ? (
									<motion.nav
										className="flex flex-1 items-center"
										animate={{ opacity: 1 }}
										initial={{ opacity: 0 }}
										exit={{ opacity: 0 }}
										transition={{
											type: "spring",
											bounce: 0.2,
											duration: 0.8,
										}}
									>
										<button
											type="button"
											className={cn(
												"relative cursor-pointer text-nowrap px-2 py-[6px] transition-colors duration-300 hover:text-white",
												activeNavItem === "dimensions"
													? "text-white"
													: "text-[#8B8B8B]",
											)}
											onClick={() => setActiveNavItem("dimensions")}
										>
											{activeNavItem === "dimensions" ? (
												<motion.div
													layoutId="placeholder"
													className="absolute inset-0 rounded-md bg-white/15"
												/>
											) : null}
											Dimensions
										</button>
										<button
											type="button"
											className={cn(
												"relative cursor-pointer text-nowrap px-2 py-[6px] transition-colors hover:text-white",
												activeNavItem === "aspect-ratio"
													? "text-white"
													: "text-[#8B8B8B]",
											)}
											onClick={() => setActiveNavItem("aspect-ratio")}
										>
											{activeNavItem === "aspect-ratio" ? (
												<motion.div
													layoutId="placeholder"
													className="absolute inset-0 rounded-md bg-white/15"
												/>
											) : null}
											Aspect Ratio
										</button>
										<button
											type="button"
											className={cn(
												"relative cursor-pointer text-nowrap px-2 py-[6px] transition-colors hover:text-white",
												activeNavItem === "prompt"
													? "text-white"
													: "text-[#8B8B8B]",
											)}
											onClick={() => setActiveNavItem("prompt")}
										>
											{activeNavItem === "prompt" ? (
												<motion.div
													layoutId="placeholder"
													className="absolute inset-0 rounded-md bg-white/15"
												/>
											) : null}
											Prompt
										</button>
									</motion.nav>
								) : (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0, transition: { duration: 0 } }}
									>
										<motion.button
											type="button"
											className="text-[#929292] outline-none transition-colors group-hover:text-white"
											onClick={() => setShowDialog(true)}
										>
											<span className="text-nowrap">Add Style</span>
										</motion.button>
									</motion.div>
								)}
							</AnimatePresence>

							<motion.button
								initial={false}
								animate={{
									rotate: showDialog ? 0 : 45,
									zIndex: showDialog ? 10 : 0,
								}}
								className="size-5 outline-none"
								onClick={() => setShowDialog(!showDialog)}
							>
								<Cross2Icon className="size-5 self-center font-bold" />
							</motion.button>
						</motion.div>

						<AnimatePresence mode="popLayout" initial={false}>
							{showDialog ? (
								<motion.div
									key={activeNavItem}
									transition={{
										type: "spring",
										duration: 0.2,
										bounce: 0,
									}}
									initial={{ opacity: 0, filter: "blur(8px)" }}
									animate={{ opacity: 1, filter: "blur(0)" }}
									exit={{ opacity: 0, transition: { duration: 0 } }}
									className="flex flex-col justify-between gap-6 p-3 pt-2 text-sm"
								>
									{content}
								</motion.div>
							) : null}
						</AnimatePresence>
					</div>
				</motion.div>
			</AnimatePresence>
		</MotionConfig>
	);
};

export default DynamicSettings;
