import * as React from "react";
import type { SVGProps } from "react";

const RotateIcon = ({
  "data-hovered": hovered,
  ...props
}: SVGProps<SVGSVGElement> & { "data-hovered"?: boolean }) => {
  const iconRef = React.useRef<SVGGElement>(null);

  React.useEffect(() => {
    if (!iconRef.current) return;

    if (hovered) {
      iconRef.current.animate(
        [
          {
            transform: "rotate(-360deg)",
            opacity: 1,
          },
        ],
        {
          duration: 300,
          easing: "cubic-bezier(0.5, 1, 0.89, 1)",
          fill: 'forwards'
        },
      );
    }
  }, [hovered]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <g
        ref={iconRef}
        className="[transform-box:fill-box] [transform-origin:center]"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </g>
    </svg>
  );
};

export default RotateIcon;
