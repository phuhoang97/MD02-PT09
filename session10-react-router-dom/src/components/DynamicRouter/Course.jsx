import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <h3>Khóa học</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJS</td>
            <td>1200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ name: "ReactJS", price: "1200" })
                }
              >
                Detail
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>NodeJS</td>
            <td>2400</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ name: "NodeJS", price: "2400" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Chi tiết khóa học</h3>
      <p>
        Khóa học tên là: {searchParam.get("name")} - Giá tiền:{" "}
        {searchParam.get("price")}
      </p>
    </div>
  );
}

export default Course;
