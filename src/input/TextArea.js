import React, { useState } from "react";

export default ({ style, ...p }) => {
  //   const [state, setInternal] = useState();

  //   const useInternal = value === undefined;

  const x = p;

  return <textarea style={style} {...p} />;
};
