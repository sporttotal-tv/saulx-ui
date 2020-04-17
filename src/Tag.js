import React from "react";
import Base from "./text/Base";

export default ({ children, style, onClick }) => {
  return (
    <div
      style={{
        width: "auto",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2.5,
        paddingBottom: 2.5,
        // borderRadius: 2.5,
        ...style,
      }}
      onClick={onClick}
    >
      <Base
        style={{
          alignItems: "center",
          display: "flex",
          fontSize: 10,
          fontWeight: "bold",
        }}
      >
        {children}
      </Base>
    </div>
  );
};
