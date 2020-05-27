import React from "react";

const createSvgCircle = (style) => (
  <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4" style={style} />
);

const Loader = ({ style, size = 20, color = "#000" }) => {
  const svg = (
    <svg height="100%" viewBox="0 0 32 32" width="100%">
      {createSvgCircle({
        stroke: color,
        opacity: 0.2,
      })}
      {createSvgCircle({
        stroke: color,
        strokeDasharray: 80,
        strokeDashoffset: 60,
      })}
    </svg>
  );

  return (
    <div
      style={{
        width: size,
        height: size,
        animationDuration: "0.75s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationName: "rotate",
        "@keyframes": {
          rotate: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
        ...style,
      }}
    >
      {svg}
    </div>
  );
};

export default Loader;
