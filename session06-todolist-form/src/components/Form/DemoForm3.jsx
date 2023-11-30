import React, { useState } from "react";

function DemoForm3() {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
    course: "HTML",
  });

  const { username, age, course } = userData;

  // Computed Property Names
  const handleChangeForm = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  /*
    {
        username: Khang,
        age: 24,
        course: ReactJS
    }
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Tên sinh viên là ${username}
    Tuổi: ${age}
    Khóa học: ${course}
    `);
  };

  return (
    <div>
      <h1>Handle Multi Input</h1>
      <form onSubmit={handleSubmit}>
        <label>username: </label>
        <input
          type='text'
          value={username}
          name='username'
          onChange={handleChangeForm}
        />
        <br />

        <label>age: </label>
        <input type='text' value={age} name='age' onChange={handleChangeForm} />
        <br />

        <label>Khóa học: </label>
        <select value={course} name='course' onChange={handleChangeForm}>
          <option value='HTML'>HTML</option>
          <option value='CSS'>CSS</option>
          <option value='JS'>JS</option>
          <option value='ReactJS'>ReactJS</option>
        </select>
        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default DemoForm3;
