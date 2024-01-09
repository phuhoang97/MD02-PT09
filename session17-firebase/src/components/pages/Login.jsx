import { Button } from "antd";
import React from "react";
import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const userLocal = {
          accessToken: res.user.accessToken,
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          uid: res.user.uid,
        };

        localStorage.setItem("userLogin", JSON.stringify(userLocal));

        navigate("/homepage");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Login Form</h3>
      {/* Xử lý login bằng API */}
      <form>
        <div>
          <label>Username</label>
          <input type='text' />
        </div>
        <div>
          <label>Password</label>
          <input type='text' />
        </div>
      </form>

      {/* Xử lý login bằng google */}
      <Button onClick={signInWithGoogle}>Login With Google</Button>
    </div>
  );
}

export default Login;
