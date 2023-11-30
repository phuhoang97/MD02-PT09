import React, { useState } from "react";

function TodoList() {
  // ["Homework", "Go to bed", ...]
  // => [{text: "Homework", complete: false}]
  // state lấy giá trị ô input
  const [text, setText] = useState("");
  // State chứa tất cả giá trị người dùng nhập
  const [list, setList] = useState([]);

  // B2: Khai báo hàm set giá trị vào state Text
  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  // B3: Viết hàm handleAdd để thêm dữ liệu vào state List
  const handleAdd = () => {
    setList([...list, { text: text, complete: false }]);
    setText("");
  };

  // B4: Viết hàm handleDelete để xóa phần tử khỏi mảng
  const handleDelete = (index) => {
    // console.log(index);
    const todo = [...list];
    todo.splice(index, 1);
    setList(todo);
  };

  // B5: Viết hàm handleToggle để làm chức năng complete
  const handleToggle = (index) => {
    const complete = list.map((item, i) =>
      i === index ? { ...item, complete: !item.complete } : item
    );
    setList(complete);
  };

  // editIndex = -1 => Mở form mới
  // editText = "" => Lấy giá trị ô input mới

  // UI

  // state editIndex để mở form mới
  const [editIndex, setEditIndex] = useState(-1); // [0,1,2,...]
  // state editText để lấy giá trị input edit
  const [editText, setEditText] = useState("");

  // Khai báo hàm handleEdit để cập lại giá trị cho editIndex và editText
  const handleEdit = (id) => {
    setEditIndex(id);
    setEditText(list[id].text);
  };

  // Khai báo hàm handleUpdate để cập nhật lại giá trị mới cho list
  const handleUpdate = () => {
    const updateTodo = [...list];
    updateTodo[editIndex].text = editText;
    setList(updateTodo);
    setEditIndex(-1);
  };

  return (
    <div>
      <h1>TodoList</h1>
      {/* B1: Lấy giá trị ô input */}
      <input type='text' value={text} onChange={handleChangeInput} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => handleToggle(index)}
                  style={{
                    textDecoration: element.complete ? "line-through" : "",
                  }}
                >
                  {element.text}
                </span>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
