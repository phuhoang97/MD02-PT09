import React from "react";
import TH02Children from "./TH02Children";

function TH02() {
  const people = {
    name: "Khang",
    age: 25,
    address: "Hà Nội",
  };

  return (
    <div>
      <h3>Thực hành 02</h3>

      <TH02Children people={people} />
    </div>
  );
}

export default TH02;
