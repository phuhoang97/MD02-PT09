import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACT_UP, ACT_DOWN, ACT_RANDOM } from "../redux/action";

function CountComp() {
  // Lấy dữ liệu từ store về để hiển thị
  const count = useSelector((state) => state.count);

  // Sử dụng useDispatch để gửi dữ liệu lên store để xử lý
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count Component</h1>
      <p>Giá trị là: {count}</p>
      {/* Bước 1:  */}
      <button onClick={() => dispatch(ACT_UP(10))}>Up</button>
      <button onClick={() => dispatch(ACT_DOWN(5))}>Down</button>
      <button onClick={() => dispatch(ACT_RANDOM())}>Random</button>
    </div>
  );
}

export default CountComp;
