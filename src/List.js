import React from "react";

export default ({ empty, header, loading, children, ...props }) => {
  return (
    <div {...props}>
      {header || null}
      {!loading && (!children || children.length === 0) ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {empty}
        </div>
      ) : (
        children
      )}
    </div>
  );
};
