import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCars, putCars } from "../redux/carSlice";

function CarsForm({ select }) {
  console.log(select);
  const [inputForm, setInputForm] = useState({
    nameProduct: "",
    price: "",
  });

  const { nameProduct, price } = inputForm;

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (select) {
      // dispatchUpdate => id của phần tử đấy, inputForm
      dispatch(putCars({ id: select.id, inputForm }));
    } else {
      dispatch(postCars(inputForm));
    }
    setInputForm({
      nameProduct: "",
      price: "",
    });
  };

  useEffect(() => {
    if (select) {
      setInputForm({
        nameProduct: select.nameProduct,
        price: select.price,
      });
    }
  }, [select]);

  return (
    <div>
      <h3>Cars Form</h3>
      <form onSubmit={handleSubmit}>
        <label>Name Product: </label>
        <input
          type='text'
          value={nameProduct}
          name='nameProduct'
          onChange={handleChangeInput}
        />
        <br />
        <label>Price: </label>
        <input
          type='text'
          value={price}
          name='price'
          onChange={handleChangeInput}
        />
        <br />
        <button type='submit'>{select ? "Update Cars" : "Add Cars"}</button>
      </form>
    </div>
  );
}

export default CarsForm;
