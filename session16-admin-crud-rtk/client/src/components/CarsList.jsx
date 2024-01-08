import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCars, getCars } from "../redux/carSlice";
import CarsForm from "./CarsForm";

function CarsList() {
  const cars = useSelector((state) => state.cars.cars);
  const status = useSelector((state) => state.cars.status);
  const [select, setSelect] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  if (status === "Loading") {
    return (
      <div
        style={{ fontSize: "50px", textAlign: "center", lineHeight: "100vh" }}
      >
        Loading ...
      </div>
    );
  }

  return (
    <div>
      <h2>Cars List</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.nameProduct}</td>
              <td>{element.price}</td>
              <td>
                <button onClick={() => setSelect(element)}>Edit</button>
                <button onClick={() => dispatch(deleteCars(element.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CarsForm select={select} />
    </div>
  );
}

export default CarsList;
