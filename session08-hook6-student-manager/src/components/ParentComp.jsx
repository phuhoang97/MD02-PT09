import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  // R-1: Khai báo state sinh viên
  const [students, setStudent] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      studentAge: 20,
      gender: "Nam",
      birthDay: "12/02/2000",
      birthPlace: "HN",
      address: "HN",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Văn B",
      studentAge: 21,
      gender: "Nam",
      birthDay: "14/08/1988",
      birthPlace: "HCM",
      address: "HCM",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Thị C",
      studentAge: 19,
      gender: "Nữ",
      birthDay: "18/10/2004",
      birthPlace: "DN",
      address: "DN",
    },
  ]);

  // T-1: Khai báo state toggle
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className='row'>
        <div className='col-lg-7 grid-margin stretch-card'>
          <div className='card'>
            {/* START CONTROL */}
            <Control setToggle={setToggle} toggle={toggle} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            {/* R-2: Truyền props (students) */}
            <ListStudent students={students} />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {toggle ? <Form /> : ""}

        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentComp;
