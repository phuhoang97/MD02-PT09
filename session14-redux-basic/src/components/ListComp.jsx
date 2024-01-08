import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACT_RANDOM_LIST } from "../redux/action";

function ListComp() {
  // useSelector => lấy giá trị state từ store
  const listArr = useSelector((state) => state.list);

  // dispatch
  const dispatch = useDispatch();
  return (
    <div>
      <h1>List Array</h1>
      <p>{listArr.toString()}</p>
      <button onClick={() => dispatch(ACT_RANDOM_LIST())}>Random</button>
    </div>
  );
}

export default ListComp;
