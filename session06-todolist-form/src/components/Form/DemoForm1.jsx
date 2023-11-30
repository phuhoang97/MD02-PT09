import React, { useState } from "react";

function DemoForm1() {
  const [text, setText] = useState("");

  // onChange & onInput => Tự tìm hiểu

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Xin chào " + text);
  };

  return (
    <div>
      <h1>Handle one input</h1>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input type='text' value={text} onChange={handleChangeInput} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default DemoForm1;
