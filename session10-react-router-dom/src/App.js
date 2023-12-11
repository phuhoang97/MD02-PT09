import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import AboutProduct from "./components/AboutProduct";
import AboutUser from "./components/AboutUser";
import AboutIndex from "./components/AboutIndex";
import NotFound from "./components/NotFound";
import NavigatePage from "./components/NavigatePage";
import Login from "./components/Login";
import Course from "./components/DynamicRouter/Course";
import CourseDetailID from "./components/DynamicRouter/CourseDetailID";
import CourseTypeID from "./components/DynamicRouter/CourseTypeID";

function App() {
  const isActiveStyle = ({ isActive }) => ({
    color: isActive ? "#ffc3c3" : "#6c6c6c",
    backgroundColor: isActive ? "#6c6c6c" : "#ffc3c3",
  });
  return (
    <div>
      {/* Sử dụng thẻ Link */}
      {/* <ul>
        <li>
          <Link to={"/"}>HomePage</Link>
        </li>
        <li>
          <Link to={"/about"}>AboutPage</Link>
          <ul>
            <li>
              <Link to={"/about/about-product"}>About Product</Link>
            </li>
            <li>
              <Link to={"/about/about-user"}>About User</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul> */}

      {/* Sử dụng NavLink */}
      <ul>
        <li>
          <NavLink to={"/"} style={isActiveStyle}>
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={isActiveStyle}>
            AboutPage
          </NavLink>
          <ul>
            <li>
              <NavLink to={"/about/about-product"} style={isActiveStyle}>
                About Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about/about-user"} style={isActiveStyle}>
                About User
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={"/contact"} style={isActiveStyle}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Gọi component NavigatePage */}
      <NavigatePage />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>

        <Route path='/about' element={<AboutPage />}>
          {/* Router index */}
          <Route index element={<AboutIndex />}></Route>
          {/* Nest Router */}
          <Route path='about-product' element={<AboutProduct />}></Route>
          <Route path='about-user' element={<AboutUser />}></Route>
        </Route>
        <Route path='/contact' element={<ContactPage />}></Route>

        {/* Demo phần Navigate */}
        <Route path='/login' element={<Login />}></Route>

        {/* Dymanic Router */}
        <Route path='/course' element={<Course />}></Route>
        <Route path='/course/:id' element={<CourseDetailID />}></Route>
        <Route path='/course/:type/:id' element={<CourseTypeID />}></Route>

        {/* Not found Router */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
