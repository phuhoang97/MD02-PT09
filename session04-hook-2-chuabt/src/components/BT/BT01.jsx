// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    age: 25,
    address: '123 Main St, Cityville',
  });

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Truyền thông tin người dùng từ state */}
      <ChildComponent userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
};

export default ParentComponent;
