import React from "react";

function Product({ element, index, addToCart }) {
  //   console.log(element);
  return (
    <li key={element.id}>
      <div style={{ border: "1px solid black" }}>
        <h5>{element.name}</h5>
        <p>{element.price}</p>
        <button onClick={() => addToCart(element)}>Add to cart</button>
      </div>
    </li>
  );
}

export default Product;
