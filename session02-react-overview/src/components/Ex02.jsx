// rfce

import React from "react";

function Ex02() {
  const number1 = +prompt("Nhập số thứ nhất: ");
  const number2 = +prompt("Nhập số thứ hai: ");
  return (
    <div>
      {/* Sử dụng prompt để hỏi ng dùng nhập vào số gì. Tính tổng 2 số đó */}
      <h3>
        Tổng của {number1} + {number2} là {number1 + number2}
      </h3>
    </div>
  );
}

export default Ex02;
