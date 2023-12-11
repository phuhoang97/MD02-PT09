import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

function NavigatePage() {
  // useNavigate là 1 hook được cung cấp bởi react-router-dom. Sử dụng để điều hướng trang web
  const navigate = useNavigate();
  // const login = false;
  return (
    <div>
      <h4>Demo Navigate</h4>
      {/* SD useNavigate điều hướng trang */}
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      {/* SD useNavigate với history */}
      <button onClick={() => navigate(-1)}>Bách</button>
      <button onClick={() => navigate(-2)}>Bách Bách</button>
      <button onClick={() => navigate(2)}>Tiến Tiến</button>
      <button onClick={() => navigate(1)}>Tiến</button>

      {/* Sử dụng Navigate để chuyển hướng trang */}
      {/* {login ? <HomePage /> : <Navigate to={"/login"} />} */}
    </div>
  );
}

export default NavigatePage;
