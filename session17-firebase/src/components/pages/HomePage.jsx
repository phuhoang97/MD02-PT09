import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
import { Button, Dropdown } from "antd";
import { KeyOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

function HomePage() {
  const userLocal = JSON.parse(localStorage.getItem("userLogin"));
  // item antd
  const items = [
    {
      key: "1",
      label: (
        <NavLink>
          <UserOutlined style={{ marginRight: "5px" }} />
          Thông tin cá nhân
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink>
          <KeyOutlined style={{ marginRight: "5px" }} />
          Đổi mật khẩu
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink>
          <LogoutOutlined style={{ marginRight: "5px" }} />
          Đăng xuất
        </NavLink>
      ),
    },
  ];

  return (
    <div className='nav'>
      <div className='nav-item'>
        <NavLink>LOGO</NavLink>
        <NavLink>Giới thiệu</NavLink>
        <NavLink>Sản phẩm</NavLink>
      </div>

      <div className='nav-item'>
        {userLocal ? (
          <>
            <Dropdown
              menu={{
                items,
              }}
              placement='bottom'
              arrow
            >
              <Button>
                <img
                  height={26}
                  width={26}
                  src={userLocal.photoURL}
                  alt='photo user'
                />
                {userLocal.displayName}
              </Button>
            </Dropdown>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Đăng nhập</NavLink>
            <NavLink>Đăng ký</NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
