import React from "react";

export default ({ style, children, singleLine, onClick }) => {
  if (singleLine) {
    return (
      <div
        onClick={onClick}
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 12,
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
        onClick={onClick}
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 12,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
};
