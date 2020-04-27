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
          width: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 40,
            height: 11,
            backgroundColor: checked ? color : "rgba(0,0,0,0.1)",
          }}
        ></div>
        <div
          style={{
            top: -1,
            left: 0,
            position: "absolute",
            transition: "opacity 0.2s, transform 0.2s",
            width: 14,
            // borderRadius: "50%",
            transform: `translate3d(${checked ? 26 : 0}px, 0px, 0)`,
            height: 14,
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
