// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  const { userInfo, setUserInfo } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Sử dụng lifting state up để cập nhật state ở ParentComponent
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <h2>Child Component</h2>
      {/* Hiển thị thông tin người dùng và form cập nhật */}
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <p>Address: {userInfo.address}</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={userInfo.age} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={userInfo.address} onChange={handleInputChange} />
        </label>
      </form>
    </div>
  );
};

export default ChildComponent;
