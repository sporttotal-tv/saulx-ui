import React from "react";
import Base from "./Base";

export default ({ style, children, props }) => {
  return (
    <Base
      style={{
        fontWeight: "bold",
        fontSize: 16,
        ...style,
      }}
      {...props}
    >
      {children}
    </Base>
  );
};
