import React, { useState } from "react";

function TH05() {
  // State lưu trữ dữ liệu:
  const [data, setData] = useState([
    { id: 1, name: "Tung", age: "26", address: "Ha Noi" },
    { id: 2, name: "Khang", age: "24", address: "Ha Noi" },
    { id: 3, name: "Dung", age: "22", address: "Ha Noi" },
    { id: 4, name: "Khanh", age: "22", address: "Ha Noi" },
  ]);

  // State dùng để lưu giá trị người dùng nhập từ ô input
  const [text, setText] = useState("");

  // Viet ham handleChangeInput để lấy các giá trị người dùng nhập vào input
  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  //   Cách 1:
  //   const searchUser = data.map((e) => (e.name === text ? e : ""));

  //   //   console.log("searchUser", searchUser);

  //   const handleSearch = () => {
  //     setData(searchUser);
  //   };

  // Cách 2:
  const filteredData = data.filter((item) => {
    console.log(item.name.indexOf(text));
    return item.name.indexOf(text) !== -1;
  });

  console.log(filteredData);

  return (
    <div>
      <h3>Tìm kiếm người dùng</h3>
      <input type='text' value={text} onChange={handleChangeInput} />
      <button>Search</button>

      <ul>
        {filteredData.map((e) => (
          <li key={e.id}>
            {e.id} - {e.name} - {e.age} - {e.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TH05;
