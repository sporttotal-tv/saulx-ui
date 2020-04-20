import React from "react";
import Base from "../text/Base";

export default ({
  color = "rgba(0,0,0,0.1)",
  checked,
  onChange,
  knobColor = "black",
  style,
  label,
  noLabel,
}) => {
  return (
    <div
      onClick={() => {
        onChange(!checked);
      }}
      style={{
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        ...style,
      }}
    >
      <div
        style={{
          width: 35,
          borderRadius: "15px",
          backgroundColor: checked ? color : null,
          padding: 2,
          border: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            transition: "opacity 0.2s, transform 0.2s",
            width: 10,
            borderRadius: "50%",
            transform: `translate3d(${checked ? 19 : 0}px, 0px, 0)`,
            height: 10,
            opacity: checked ? 1 : 0.4,
            backgroundColor: knobColor,
          }}
        ></div>
      </div>
      {noLabel ? null : (
        <Base
          style={{
            marginLeft: 5,
            fontSize: 12,
          }}
        >
          {label || ""}
        </Base>
      )}
    </div>
  );
};
