import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  const [color, setColor] = useState("#000000");

  const [text, setText] = useState("Hello");

  const handleColor = (e, text) => {
    setColor(e);
    setText(text);
  };

  return (
    <div>
      <h1>IndexColor</h1>

      {/* Lifting State up */}

      {/* Cách 1: Sử dụng hàm setState: setColor*/}
      {/* <ColorPicker setColor={setColor} /> */}

      {/* Cách 2: Tạo hàm, Trong hàm sẽ sử dụng được nhiều setState */}

      <ColorPicker handleColor={handleColor} />

      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
        }}
      ></div>

      <p>{text}</p>
    </div>
  );
}

export default IndexColor;
