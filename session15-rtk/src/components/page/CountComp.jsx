import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/todoSlice";

function CountComp() {
  /*
        useSelector => lấy dữ liệu từ store
        useDispatch => gửi act lên store

        Store (useSelector) ===> UI ===> event (Dispatch) gửi action lên ===> Store 
        ===> reducer (gtri state hiện tại và action được gửi lên) 
        ===> Cập nhật lại giá trị mới ===> newState ===> UI
     */
  const count = useSelector((state) => state.count.count);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h3>Count Component</h3>
        <p>Giá trị là: {count}</p>
        <button onClick={() => dispatch(decrement())}>Down</button>
        <button onClick={() => dispatch(increment())}>Up</button>
      </div>
    </div>
  );
}

export default CountComp;
