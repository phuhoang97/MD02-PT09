import React, { useState } from "react";

function DemoForm2() {
  const [course, setCourse] = useState("HTML");

  const handleChangeSelect = (e) => {
    setCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Khóa học bạn chọn là " + course);
  };
  return (
    <div>
      <h1>Handle form with select option</h1>
      <form onSubmit={handleSubmit}>
        <label>Khóa học: </label>
        <select value={course} onChange={handleChangeSelect}>
          <option value='HTML'>HTML</option>
          <option value='CSS'>CSS</option>
          <option value='JS'>JS</option>
          <option value='ReactJS'>ReactJS</option>
        </select>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default DemoForm2;
