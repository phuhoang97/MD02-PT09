import { combineReducers } from "redux";
import count from "./count";
import list from "./list";

// combineReducers => được sử dụng để gộp các reducer lại với nhau

export const reducer = combineReducers({ count, list });
