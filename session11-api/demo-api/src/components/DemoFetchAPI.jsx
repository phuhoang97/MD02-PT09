import React, { useEffect, useState } from "react";

function DemoFetchAPI() {
  const [data, setData] = useState([]);
  // Get Fetch API
  const handleGetFetch = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json()) // ép kiểu dữ liệu
      .then((user) => setData(user)) // nhận dữ liệu trả về
      .catch((err) => console.log(err)); // Thông báo lỗi khi trả về có lỗi
  };

  //   useEffect(() => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // ép kiểu dữ liệu
  //       .then((user) => setData(user)) // nhận dữ liệu trả về
  //       .catch((err) => console.log(err)); // Thông báo lỗi khi trả về có lỗi
  //   }, []);

  // Post Fetch API
  const people = {
    name: "Khanh",
    age: "24",
    address: "Hai Phong",
    phone: "097891289",
  };
  const handlePostFetch = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(people),
    });
  };

  // Put Fetch API
  const newPeople = {
    name: "Hoang",
    // age: "20",
    address: "HCM",
    phone: "097812895",
  };
  const handlePutFetch = () => {
    fetch("http://localhost:8000/users/4", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPeople),
    });
  };

  // Patch fetch API
  const newPeoplePatch = {
    name: "Quang",
    // age: "24",
    address: "HN",
    phone: "097856295",
  };
  const handlePatchFetch = () => {
    fetch("http://localhost:8000/users/5", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPeoplePatch),
    });
  };

  // Phân biệt put và patch
  // PUT: Cập nhật lại thành đối tượng mới
  // Patch: Chỉ cập nhật phần được thay đổi

  // Delete Fetch API
  const handleDeleteFetch = () => {
    fetch("http://localhost:8000/users/4", {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h1>Demo Fetch API</h1>
      <button onClick={handleGetFetch}>Get Fetch API</button>
      <button onClick={handlePostFetch}>Post Fetch API</button>
      <button onClick={handlePutFetch}>Put Fetch API</button>
      <button onClick={handlePatchFetch}>Patch Fetch API</button>
      <button onClick={handleDeleteFetch}>Delete Fetch API</button>
      {/* Hiển thị dữ liệu từ get */}
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchAPI;
