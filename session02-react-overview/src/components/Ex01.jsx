// rfce
import React from "react";
import "./Ex01.css";

function Ex01() {
  const listCourse = ["HTML", "CSS", "JS", "ReactJS", "PHP"];
  return (
    <div>
      {/* 
      Tạo danh sách khóa học:
        Cách khóa học sẽ được nằm trong 1 mảng
        const listCourse = ["HTML", "CSS", "JS", "ReactJS", "PHP"]
        => Sử dụng hàm map để hiển thị mảng ra ngoài màn hình cho người dùng.
    */}

      <div className='list-course'>
        <h1>Danh sách khóa học</h1>
        <ul>
          {listCourse.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ex01;
