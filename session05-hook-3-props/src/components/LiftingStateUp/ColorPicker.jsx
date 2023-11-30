import React from "react";

function ColorPicker({ setColor, handleColor }) {
  // Cách 1:
  //   const handleChangeColor = (e) => {
  //     setColor(e.target.value);
  //   };

  // Cách 2:
  const handleChangeColor = (e) => {
    handleColor(e.target.value, "Chuan bi duoc nghi roi");
  };
  return (
    <div>
      <input type='color' onChange={handleChangeColor} />
    </div>
  );
}

export default ColorPicker;
