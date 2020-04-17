import React, { useState } from "react";

export default ({ style, onChange, value, placeholder }) => {
  const [state, setInternal] = useState();

  const useInternal = value === undefined;

  return (
    <input
      placeholder={placeholder}
      value={useInternal ? state : value}
      onChange={(e) => {
        setInternal(e.target.value);
        onChange(e.target.value);
      }}
      style={{
        borderRadius: 2.5,
        border: "1px solid rgba(0,0,0,0.1)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        appearance: "none",
        padding: 5,
        fontSize: 12,
        ...style,
      }}
    />
  );
};
