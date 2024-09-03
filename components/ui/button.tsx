import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "text-textBlack hover:opacity-95",
				outline: "bg-transparent border border-white",
			},
			size: {
				default: "text-sm py-3 px-[22px] font-bold",
				sm: "text-xs px-[10px] py-[3px] font-normal",
				lg: "text-base leading-5 font-semibold py-[18px] px-[31px]",
			},
			color: {
				white: "bg-white text-textBlack",
				dark: "bg-backgroundContrast text-white",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			color: "white",
		},
	},
);
export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
		VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, color, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, color, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
