import React from "react";
import { Outlet } from "react-router-dom";

function AboutPage() {
  // Outlet là phương thức được cung cấp bởi react router dom giúp xác định vị trí hiển thị
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AboutPage;
