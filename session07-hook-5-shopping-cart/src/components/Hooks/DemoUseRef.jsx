import React, { useRef, useState } from "react";

function DemoUseRef() {
  /*
    useRef: là hook được cung cấp bởi react. khi sử dụng sẽ trả
    về 1 đối tượng có key là current
   */
  const [time, setTime] = useState(60);
  // setInterval => sẽ chạy sau 1 khoảng thời gian setting
  let timer = useRef();
  //   console.log(timer);
  const handleStart = () => {
    timer.current = setInterval(() => setTime((prev) => prev - 1), 1000);
    console.log("start", timer.current);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    console.log("stop", timer.current);
  };

  return (
    <div>
      <h1>Demo useRef</h1>
      <p>Thời gian: {time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default DemoUseRef;
