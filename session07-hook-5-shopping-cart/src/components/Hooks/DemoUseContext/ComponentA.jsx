import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";
import "./styleComponet.css";

// Tạo ngữ cảnh
export const themeContext = createContext();

function ComponentA() {
  // Để chia sẻ được dữ liệu => sử dụng props để truyền dữ liệu trong component nằm trong cây dom
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Cách 1: Sử dụng props: Component A => ComponentB => ComponentC

  // Cách 2: Sử dụng useContext để truyền dữ liệu từ componentA => ComponentC

  // console.log(theme);

  return (
    <div>
      <h1>Componet A - Cha</h1>
      {/* Cách 1: Truyền props */}
      <button onClick={handleChangeTheme}>Click</button>
      {/* <ComponentB themeA={theme} /> */}

      {/* Cách 2: Sử dụng useContext */}
      <themeContext.Provider value={theme}>
        <ComponentB />
      </themeContext.Provider>
    </div>
  );
}

export default ComponentA;
