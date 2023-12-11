import React, { useReducer } from "react";

function DemoUseReducer() {
  /*
  Tương tư như useState. 
  Nhưng được sử dụng cho những component phức tạp và cần có nhiều action để thay đổi state đó.
  */

  /*
    Ví dụ chức năng tăng giảm số

    - useState: sẽ có 2 việc
        + Bước 1: Khai báo intialState.
        + Bước 2: Action (Up: state + 1) (Down: state - 1)

    - useReducer: sẽ có 4 hành động
        + Bước 1: Khai báo intialState.
        + Bước 2: Action (Up: state + 1) (Down: state - 1)
        + Bước 3: Khai báo Reducer => Nhận action để xử lý
        + Bước 4: Dispatch => Gửi hành động lên cho Reducer
  */

  // Bước 1
  const initalState = 0;

  // Bước 2: Định nghĩa action
  const ACT_UP = "UP";
  const ACT_DOWN = "DOWN";

  /*
    Bước 3: Khai báo hàm reducer. Nhận vào 2 tham số:
        + state hiện tại
        + action
  */

  const reducer = (state, action) => {
    // console.log("state", state);
    // console.log("action", action);
    switch (action) {
      case ACT_UP:
        return state + 5;
      case ACT_DOWN:
        return state - 2;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <h3>Giá trị Count: {count}</h3>
      <button onClick={() => dispatch(ACT_UP)}>Up</button>
      <button onClick={() => dispatch(ACT_DOWN)}>Down</button>
    </div>
  );
}

export default DemoUseReducer;
