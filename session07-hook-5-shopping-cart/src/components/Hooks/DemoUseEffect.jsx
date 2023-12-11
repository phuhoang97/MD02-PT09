import React, { useEffect, useState } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(20);
  const [text, setText] = useState("Hello");

  /*
        useEffect là 1 hook nhận vào 2 tham số:
            Tham số 1: Callback ()=>{}
            Tham số 2: [] => dependencies (deps)

        useEffect dùng để: callApi, cleanUp, updateDom, ...

        useEffect có 3 dạng:
            + useEffect(callback)
    */

  /*
    Trường hợp 1: useEffect(callback)
        + Callback luôn được gọi sau khi component mounted
        + Gọi callback mỗi khi component re-render

  */

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // console.log("useEffect được gọi !!!");
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);

  /*
    Trường hợp 2: useEffect(callback, [])
        + Callback luôn được gọi sau khi component mounted
        + Chỉ gọi callback 1 lần sau khi component mounted
  */

  //   useEffect(() => {
  //     console.log("useEffect được gọi !!!");
  //   }, []);

  /*
    Trường hợp 3: useEffect(callback, [deps])
        + Callback luôn được gọi sau khi component mounted
        + Sẽ gọi callback khi deps thay đổi
  */

  // useEffect(() => {
  //   console.log("useEffect được gọi !!!");
  // }, [count, text]);

  return (
    <div>
      <h1>DemoUseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setText("Hiiii")}>Change</button>
    </div>
  );
}

export default DemoUseEffect;
