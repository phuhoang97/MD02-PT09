import React from "react";
import axios from "axios";

function DemoAxios() {
  // Get Axios
  const handleGetAxios = () => {
    axios
      .get("http://localhost:8000/users")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // Post Axios
  const newPeople = {
    name: "Quynh",
    age: "23",
    address: "Phu Tho",
    phone: "091264512",
  };
  const handlePostAxios = () => {
    axios.post("http://localhost:8000/users", newPeople);
  };

  // Put Axios
  const newPeoplePut = {
    name: "Hoang",
    age: "28",
    address: "Ha noi",
    phone: "0911245412",
  };
  const handlePutAxios = () => {
    axios.put("http://localhost:8000/users/6", newPeoplePut);
  };

  // Patch Axios
  const newPeoplePatch = {
    name: "Tuan Anh",
    age: "23",
    address: "Ha noi",
    phone: "0911245412",
  };
  const handlePatchAxios = () => {
    axios.put("http://localhost:8000/users/5", newPeoplePatch);
  };

  // Delete Axios
  const handleDeleteAxios = () => {
    axios.delete("http://localhost:8000/users/5");
  };

  return (
    <div>
      <h1>Demo Axios</h1>
      <button onClick={handleGetAxios}>Get Axios</button>
      <button onClick={handlePostAxios}>Post Axios</button>
      <button onClick={handlePutAxios}>Put Axios</button>
      <button onClick={handlePatchAxios}>Patch Axios</button>
      <button onClick={handleDeleteAxios}>Delete Axios</button>
    </div>
  );
}

export default DemoAxios;
