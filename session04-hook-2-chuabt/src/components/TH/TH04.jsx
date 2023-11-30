import React, { useState } from "react";

function TH04() {
  // Làm chức năng todolist
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  // Viet ham handleChangeInput để lấy các giá trị ng dùng nhập từ ô input
  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  // console.log(text);

  // Hàm handleAdd dùng để thêm giá trị vào []
  const handleAdd = () => {
    setList([...list, text]);
  };

  //   console.log(list);

  return (
    <div>
      <h3>TodoList</h3>
      <input type='text' value={text} onChange={handleChangeInput} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default TH04;
