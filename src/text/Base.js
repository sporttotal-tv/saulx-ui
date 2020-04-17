import React from "react";

export default ({ style, children, singleLine }) => {
  if (singleLine) {
    return (
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 16,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          width: "100%",
          ...style,
        }}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 16,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
};
