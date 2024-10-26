import { clsx } from "clsx";
import type { CSSProperties } from "react";
import "./styles.css";

const bars = Array(12).fill(0);

export function Spinner({
  color,
  size = 20,
}: { color: string; size?: number }) {
  return (
    <div
      className="wrapper"
      style={
        {
          "--spinner-size": `${size}px`,
          "--spinner-color": color,
        } as CSSProperties
      }
    >
      <div className="spinner">
        {bars.map((_, i) => (
          <div
            className="bar"
            key={`spinner-bar-${
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              i
            }`}
          />
        ))}
      </div>
    </div>
  );
}
