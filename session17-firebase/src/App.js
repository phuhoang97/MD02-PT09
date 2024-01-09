import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/homepage' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
