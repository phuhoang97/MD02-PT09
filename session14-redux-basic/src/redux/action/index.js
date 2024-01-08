// Import các actionType được định nghĩa

import * as typeAction from "../constant/actionType";

console.log(typeAction);

export const ACT_UP = (value) => {
  // Bước 2
  return {
    type: typeAction.UP_COUNT,
    payload: value,
  };
};

export const ACT_DOWN = (value) => {
  return {
    type: typeAction.DOWN_COUNT,
    payload: value,
  };
};

export const ACT_RANDOM = () => {
  return {
    type: typeAction.RANDOM_COUNT,
  };
};

export const ACT_RANDOM_LIST = () => {
  return {
    type: typeAction.RANDOM_LIST,
  };
};
