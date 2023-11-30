// rfce

import React from "react";
import { useState } from "react";

function UseState() {
  // 1. useState là 1 hook được cung cấp bởi Reactjs.
  // Được dùng để lưu trữ các giá trị trong components

  // Cú pháp:
  // const [nameState, setNameState] = useState(initalStateValue)
  // nameState: Tên state
  // setNameState: là 1 hàm dùng để set lại giá trị cho nameState
  // initalStateValue: Giá trị khởi tạo

  // Ví dụ:

  const [count, setCount] = useState(10);
  //   console.log(count);

  function handleChangeState() {
    setCount(count - 1);
  }

  // 2. Kiểu dữ liệu
  // 2.1. Kiểu nguyên thủy: number, string, null, boolean, ...
  // String:
  const [text, setText] = useState("Hello World !!!");

  const handleChangeText = () => {
    setText("Cảm ơn cả lớp !!!");
    // console.log("50000000");
  };

  // Boolean
  const [toggle, setToggle] = useState(true);

  const handleChangeToggle = () => {
    setToggle(!toggle);
  };

  // 2.2. Kiểu dữ liệu tham chiếu: Array, object
  // khai báo array arrList: 1,3,5,7
  const [arrList, setArrList] = useState([1, 3, 5, 7]);

  const handleRandom = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  // Object
  const [objList, setObjList] = useState({
    objNumber: 50,
    objArr: [2, 4, 6, 8],
  });

  // Array + object
  const [listStudent, setListStudent] = useState([
    { id: 1, name: "Khánh", age: 23, address: "Hà Nội" },
    { id: 2, name: "Khang", age: 25, address: "Đà Nẵng" },
    { id: 3, name: "Quảng", age: 30, address: "Hồ Chí Minh" },
    { id: 4, name: "Nguyên", age: 28, address: "Hà Nội" },
  ]);

  return (
    <div>
      <h1>UseState</h1>
      {/* Number */}
      <div>Number: {count}</div>
      <button onClick={handleChangeState}>Down</button>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <br />
      <br />
      {/* String */}
      <div>String: {text}</div>
      <button onClick={handleChangeText}>Change</button>

      {/* 
        Đối với các hàm để tên đầu là handle
        Đối với các sự kiện để tên đầu là on
      */}

      {/* Toán tử 3 ngôi: là viết tắt của if else
      
      if(dieukien) {
        // statement true
      } else {
        // statement false
      }
=>
      dieukien ? statement true : statement false
      */}

      {toggle ? (
        <div>
          <p>Tùng depzaii nhỉ !!!</p>
          <button onClick={handleChangeToggle}>Click me !!!</button>
        </div>
      ) : (
        <div>
          <p>KHÔNGGGGGGGGGGGGGGGGGGGG</p>
          <button onClick={handleChangeToggle}>Click me !!!</button>
        </div>
      )}

      {/* Array */}
      <h3>Array</h3>
      <div>Array gồm: {arrList.toString()}</div>
      <button onClick={handleRandom}>Random</button>
      {/* Khi người dùng click sẽ thêm 1 số ngẫu nhiều vào mảng ban đầu

        Sử dụng kiến thức trong ES06: Spread operation
        Sử dụng kiến thức vừa học
      */}

      {/* Object */}
      <h3>Object</h3>
      <div>Number object: {objList.objNumber}</div>
      <button
        onClick={() =>
          setObjList({ ...objList, objNumber: objList.objNumber + 10 })
        }
      >
        Up
      </button>

      <div>Array object: {objList.objArr.toString()}</div>
      <button
        onClick={() =>
          setObjList({
            ...objList,
            objArr: [...objList.objArr, Math.floor(Math.random() * 10)],
          })
        }
      >
        Random number
      </button>

      {/* Array + object */}
      <h3>Array + Object</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UseState;
