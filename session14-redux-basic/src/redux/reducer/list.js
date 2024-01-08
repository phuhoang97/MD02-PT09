import * as typeAction from "../constant/actionType";

// B1: Khai báo giá trị khởi tạo
const initialState = [3, 5, 7, 9];

// B2: Import actionType

// B3: Khai báo hàm list

const list = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.RANDOM_LIST:
      state = [...state, Math.floor(Math.random() * 100)];
      return state;

    default:
      break;
  }
  return state;
};

export default list;
