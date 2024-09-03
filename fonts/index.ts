import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const interFont = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const redactionFont = localFont({
	src: [
		{
			path: "./redaction/Redaction_50-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./redaction/Redaction_50-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./redaction/Redaction_50-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
});