import React, { type CSSProperties } from "react";

const GLYPHS =
	"ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const GlitchedText = () => {
	const text = "Khoa Vo";
	return (
		<>
			<button type="button" style={{ "--speed": 0.1 } as CSSProperties}>
				{text.split("").map((char, index) => {
					return (
						<span
							key={`${char}_${index}`}
							data-char={char}
							style={
								{
									"--index": index,
									"--char-1": `"${
										GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
									}"`,
									"--char-2": `"${
										GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
									}"`,
									"--char-3": `"${
										GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
									}"`,
								} as CSSProperties
							}
						>
							{char}
						</span>
					);
				})}
			</button>
		</>
	);
};
