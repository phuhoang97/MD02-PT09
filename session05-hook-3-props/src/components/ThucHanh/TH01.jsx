import React, { useState } from "react";
import TH01Children from "./TH01Children";

function TH01() {
  const [text, setText] = useState("VỀ NHỚ HỌC BÀI !!!!");
  return (
    <div>
      <h1>TH01</h1>
      <TH01Children text={text} />
    </div>
  );
}

export default TH01;
