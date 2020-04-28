import React, { useState, useEffect, useRef } from "react";

export default ({ style, type, onChange, value, placeholder, debounce }) => {
  const [state, setInternal] = useState();
  const ref = useRef();
  const [tmpInternal, setTmpInternal] = useState(false);

  const useInternal = tmpInternal || value === undefined;

  useEffect(() => {
    () => {
      clearTimeout(ref.timeout);
    };
  }, [ref]);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={useInternal ? state : value}
      onChange={(e) => {
        const value = e.target.value;
        setInternal(value);
        if (debounce) {
          setTmpInternal(true);
          clearTimeout(ref.timeout);
          ref.timeout = setTimeout(() => {
            onChange(value);
          }, debounce);
        } else {
          onChange(value);
        }
      }}
      style={{
        // borderRadius: 2.5,
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
