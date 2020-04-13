import React from "react";

export default ({ style, children, props }) => {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: 14,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
