import React from "react";
import Playground from "../../Playground";
import BasicStructure from "./BasicStructure";

// @ts-ignore
import code from "!!raw-loader!./BasicStructure.tsx";

const BasicStructurePlayground = () => {
  return (
    <Playground
      Component={BasicStructure}
      code={code}
      language="ts"
      showConsole
    />
  );
};

export default BasicStructurePlayground;
