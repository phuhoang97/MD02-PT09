import React from "react";
import { useParams } from "react-router-dom";

function CourseTypeID() {
  const param = useParams();
  return (
    <div>
      Khóa học tên là: {param.type} - Id khóa học là: {param.id}
    </div>
  );
}

export default CourseTypeID;
