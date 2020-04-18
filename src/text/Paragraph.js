import React from "react";
import Base from "./Base";

export default ({ style, children, props }) => {
  return (
    <Base
      style={{
        letterSpacing: "0.2px",
        lineHeight: "20px",
        fontSize: 14,
        ...style,
      }}
      {...props}
    >
      {children}
    </Base>
  );
};
