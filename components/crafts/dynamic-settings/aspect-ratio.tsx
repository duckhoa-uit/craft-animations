import { cn } from "@/app/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

const AspectRatio = ({ onSubmit }: { onSubmit: () => void }) => {
	const [value, setValue] = useState<
		"1:1" | "16:9" | "21:9" | "3:4" | "4:3" | "custom"
	>("1:1");

	return (
		<form className="flex flex-col gap-2">
			<div className="flex gap-3">
				<button
					type="button"
					onClick={() => setValue("1:1")}
					className={cn(
						"flex w-auto items-center justify-center gap-[6px] rounded-[6px] bg-transparent px-3 py-[6px] text-[#929292] transition-colors duration-200 ease-in-out hover:text-[#FDFF79]",
						value === "1:1" ? "!bg-[#1F2211] text-[#FDFF79]" : null,
					)}
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<title>Square</title>
						<motion.path
							layout
							d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						/>
					</svg>
					<span>1:1</span>
				</button>
				<button
					type="button"
					onClick={() => setValue("16:9")}
					className={cn(
						"flex w-auto items-center justify-center gap-[6px] rounded-[6px] bg-transparent px-3 py-[6px] text-[#929292] transition-colors duration-200 ease-in-out hover:text-[#FDFF79]",
						value === "16:9" ? "!bg-[#1F2211] text-[#FDFF79]" : null,
					)}
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<title>16:9</title>
						<motion.path
							layout
							d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						/>
					</svg>
					<span>16:9</span>
				</button>
				<button
					type="button"
					onClick={() => setValue("21:9")}
					className={cn(
						"flex w-auto items-center justify-center gap-[6px] rounded-[6px] bg-transparent px-3 py-[6px] text-[#929292] transition-colors duration-200 ease-in-out hover:text-[#FDFF79]",
						value === "21:9" ? "!bg-[#1F2211] text-[#FDFF79]" : null,
					)}
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<title>21:9</title>
						<motion.path
							layout
							d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						/>
					</svg>
					<span>21:9</span>
				</button>
				<button
					type="button"
					onClick={() => setValue("3:4")}
					className={cn(
						"flex w-auto items-center justify-center gap-[6px] rounded-[6px] bg-transparent px-3 py-[6px] text-[#929292] transition-colors duration-200 ease-in-out hover:text-[#FDFF79]",
						value === "3:4" ? "!bg-[#1F2211] text-[#FDFF79]" : null,
					)}
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<title>3:4</title>
						<motion.path
							layout
							d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						/>
					</svg>
					<span>3:4</span>
				</button>
			</div>

			<div className="flex gap-3">
				<button
					type="button"
					onClick={() => setValue("4:3")}
					className={cn(
						"flex w-auto items-center justify-center gap-[6px] rounded-[6px] bg-transparent px-3 py-[6px] text-[#929292] transition-colors duration-200 ease-in-out hover:text-[#FDFF79]",
						value === "4:3" ? "!bg-[#1F2211] text-[#FDFF79]" : null,
					)}
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<title>4:3</title>
						<motion.path
							layout
							d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						/>
					</svg>
					<span>4:3</span>
				</button>
				<button
					type="button"
					onClick={() => setValue("custom")}
					className={cn(
						"flex w-auto items-center justify-center gap-[6px] rounded-[6px] bg-transparent px-3 py-[6px] text-[#929292] transition-colors duration-200 ease-in-out hover:text-[#FDFF79]",
						value === "custom" ? "!bg-[#1F2211] text-[#FDFF79]" : null,
					)}
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<title>Custom</title>
						<path
							d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						/>
					</svg>
					<span>Custom</span>
				</button>
			</div>

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

export default AspectRatio;
