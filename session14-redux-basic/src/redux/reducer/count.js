import * as typeAction from "../constant/actionType";
// Bước 1: Khai báo giá trị khởi tạo
const initialState = 0;

// Bước 2: Định nghĩa các action => actionType.js
// => import các action để sử dụng

// Bước 3: Khai báo hàm reducer để xử lý các action nhận được
/*
    Nhận vào 2 tham số:
        + Tham số 1: Giá trị khởi tạo
        + Tham số 2: Action được gửi lên

    - Action: 
    {
        type: "Tên action",
        payload: value
    }
*/
const count = (state = initialState, action) => {
  // Bước 3
  switch (action.type) {
    case typeAction.UP_COUNT:
      state += action.payload;
      return state;
    case typeAction.DOWN_COUNT:
      state -= action.payload;
      return state;
    case typeAction.RANDOM_COUNT:
      state = Math.floor(Math.random() * 99999);
      return state;
    default:
      break;
  }

  return state;
};

export default count;
