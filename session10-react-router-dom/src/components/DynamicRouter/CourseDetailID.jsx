import React from "react";
import { useParams } from "react-router-dom";

function CourseDetailID() {
  // Sử dụng useParams là hook được cung cấp bởi react-router-dom. Sd để lấy param của URL
  const param = useParams();
  //   console.log(param);

  return <div>ID khóa học là: {param.id}</div>;
}

export default CourseDetailID;
