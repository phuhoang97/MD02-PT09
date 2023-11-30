import React, { useState } from "react";

function TH01() {
  // Tăng giảm state
  const [count, setCount] = useState(0);

  const handleRandom = () => {
    setCount(Math.floor(Math.random() * 10000));
  };

  // Event
  const handleClick1 = () => {
    console.log("Click 1");
  };

  const handleClick2 = () => {
    console.log("Click 2");
  };

  const handleClick3 = (e) => {
    console.log(e);
  };

  const handleClick4 = (e) => {
    console.log(e);
  };

  /* 
    function f(e) { // Tham số
        // Logic
        console.log(e) // 10
    }

    f(10) // 10 là đối số
  */

  return (
    <div>
      <h1>Tập đếm</h1>
      <div>Số: {count}</div>
      <button onClick={() => setCount(count + 1)}>Thêm</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={handleRandom}>Random</button>
      {/* Event */}
      {/* // Sai */}
      <button onClick={handleClick1()}>Click 1</button>
      {/* Đúng: Gọi hàm */}
      <button onClick={handleClick2}>Click 2</button>
      {/* // Sai */}
      <button onClick={handleClick3("Click 3")}>Click 3</button>
      {/* Đúng: Truyền đối số */}
      <button onClick={() => handleClick4("Click 4")}>Click 4</button>
    </div>
  );
}

export default TH01;
