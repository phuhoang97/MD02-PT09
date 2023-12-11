import React from "react";
import ComponentC from "./ComponentC";

function ComponentB({ themeA }) {
  // console.log("props", props.themeA);
  // console.log(themeA);
  return (
    <div>
      <h1>Component B - Con</h1>
      {/* <ComponentC themeB={themeA} /> */}

      <ComponentC />
    </div>
  );
}

export default ComponentB;
