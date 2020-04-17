import React, { useState } from "react";

const Icon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      style={{
        marginLeft: 2.5,
        marginRight: 7.5,
        opacity: 0.75,
      }}
    >
      <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
    </svg>
  );
};

export default ({ style, onChange, value, placeholder }) => {
  const [state, setInternal] = useState();

  const useInternal = value === undefined;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: 2.5,
        padding: 5,
      }}
    >
      <Icon />
      <input
        placeholder={placeholder}
        value={useInternal ? state : value}
        onChange={(e) => {
          setInternal(e.target.value);
          onChange(e.target.value);
        }}
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          appearance: "none",
          fontSize: 12,
          ...style,
        }}
      />
    </div>
  );
};
