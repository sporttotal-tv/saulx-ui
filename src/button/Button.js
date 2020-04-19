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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: 12,
        paddingBottom: 5,
        border: "1px solid black",
        transition: "box-shadow 0.15s",
        ":hover": {
          boxShadow: "0px 0px 10px rgba(215,215,225,1)",
        },
        ...style,
      }}
      to={to}
    >
      {children}
    </div>
  );
};

export default Button;
