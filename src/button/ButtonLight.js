import React from "react";
import { Link } from "@saulx/hub";

const ButtonLight = ({ style, children, to, active, onClick }) => {
  const isFn = typeof active === "function";
  let isActive = isFn ? active(to) : active;
  return (
    <div
      style={{
        display: "flex",
        paddingBottom: 3,
        paddingTop: 3,
        borderBottom: isActive ? "2px solid black" : "2px solid rgba(0,0,0,0)",
        ...style,
      }}
    >
      <Link
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 14,
        }}
        to={to}
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );
};

export default ButtonLight;
