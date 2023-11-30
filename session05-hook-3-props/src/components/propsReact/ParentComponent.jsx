import React from "react";
import ChildrenComponent from "./ChildrenComponent";

function ParentComponent() {
  // Props là viết tắt của properties (Thuộc tính)
  // Giúp giao tiếp và chia sẻ dữ liệu trong cây DOM

  // Tại sao lại phải sử dụng props:
  // => Vì react là luồng dữ liệu 1 chiều (one way data binding)
  // nên dữ liệu sẽ chạy từ component cha xuống các component con
  const number = 100;
  return (
    <div>
      <h1>ParentComponent</h1>
      {/* Định nghĩa key-value */}
      <ChildrenComponent numberProps={number} stringProps={"Hello"} />
    </div>
  );
}

export default ParentComponent;
