import React from "react";
import Student from "./Student";

// R-3: Nhập props được gửi từ cha
function ListStudent({ students }) {
  //   console.log(students);
  return (
    <div className='card-body'>
      <h3 className='card-title'>Danh sách sinh viên</h3>
      <div className='table-responsive pt-3'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {students.map((element, index) => (
              <Student element={element} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
