import React from "react";
import Base from "./Base";

export default ({ style, children, props }) => {
  return (
    <Base
      style={{
        fontWeight: "bold",
        fontSize: 18,
        ...style,
      }}
      {...props}
    >
      {children}
    </Base>
  );
};
