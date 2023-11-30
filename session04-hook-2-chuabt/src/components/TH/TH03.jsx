import React, { useState } from "react";

function TH03() {
  // Sử dụng kiến thức array object => hiển thị ra cho người dùng.
  const [arrObj, setArrObj] = useState([
    {
      id: 1,
      productName: "Áo",
      price: 20,
    },
    {
      id: 2,
      productName: "Quần",
      price: 20,
    },
    {
      id: 3,
      productName: "Váy",
      price: 20,
    },
  ]);
  return (
    <div>
      <h2>TH03</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {arrObj.map((e, i) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.productName}</td>
              <td>{e.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TH03;
