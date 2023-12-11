import React from "react";

// Nhập dữ liệu từ ListStudent => hiển thị đúng trường
function Student({ element, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{element.studentId}</td>
      <td>{element.studentName}</td>
      <td>{element.studentAge}</td>
      <td>{element.gender}</td>
      <td>
        <div className='template-demo'>
          <button type='button' className='btn btn-danger btn-icon-text'>
            Xem
          </button>
          <button type='button' className='btn btn-warning btn-icon-text'>
            Sửa
          </button>
          <button type='button' className='btn btn-success btn-icon-text'>
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
