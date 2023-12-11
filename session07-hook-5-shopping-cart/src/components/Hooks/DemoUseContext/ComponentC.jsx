import React, { useContext } from "react";
import { themeContext } from "./ComponentA";

function ComponentC({ themeB }) {
  const theme = useContext(themeContext);
  return (
    <div>
      <h1>Component C - Cháu</h1>
      <div className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio ad
        culpa dolore! Voluptatum illo tenetur accusantium. Dicta, officiis
        debitis?
      </div>
    </div>
  );
}

export default ComponentC;
