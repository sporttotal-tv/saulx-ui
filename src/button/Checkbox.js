import React, { useState } from "react";
import Base from "../text/Base";

const Select = ({ checked }) => {
  return (
    <div
      style={{
        padding: 1,
        border: "1px solid black",
      }}
    >
      <svg
        style={{
          opacity: checked ? 1 : 0,
        }}
        width="11"
        height="11"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 24 24"
      >
        <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
      </svg>
    </div>
  );
};

export default ({
  checked,
  children,
  style,
  className,
  onChange,
  defaultChecked,
  ...props
}) => {
  const [stateChecked, setInternal] = useState(defaultChecked);

  const useInternal = checked === undefined;

  return (
    <div
      onClick={() => {
        let c = useInternal ? stateChecked : checked;
        setInternal(!c);
        onChange(!c);
      }}
      className={className}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        color: "black",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 10,
        backgroundColor: "rgba(0,0,0,0)",
        ":hover": {
          backgroundColor: "rgba(0,0,0,0.05)",
        },
        ...style,
      }}
      {...props}
    >
      <Select checked={useInternal ? stateChecked : checked} />
      <Base
        style={{
          alignItems: "center",
          display: "flex",
          marginLeft: 10,
          fontSize: 12,
        }}
      >
        {children}
      </Base>
    </div>
  );
};
