import React from "react";
import { useHub } from "@saulx/hub";

const Button = ({ style, children, to, active, onClick }) => {
  const isFn = typeof active === "function";
  let isActive = isFn ? active(to) : active;
  const hub = useHub();

  return (
    <div
      onClick={(e) => {
        if (to) {
          e.preventDefault();
          e.stopPropagation();
          hub.set("device.history", to);
        } else {
          onClick(e);
        }
      }}
      style={{
        cursor: "pointer",
        padding: 5,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: 14,
        paddingBottom: 5,
        border: "1px solid black",
        ...style,
      }}
      to={to}
    >
      {children}
    </div>
  );
};

export default Button;
