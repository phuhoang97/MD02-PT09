import React from "react";
import "./Cart.css";

function Cart({ setToggleCart, cartItem, handleUpdateItem, handleDeleteItem }) {
  //   console.log(cartItem);
  return (
    <div>
      <div className='cart-item'>
        <h3 style={{ display: "inline-block" }}>Cart Product</h3>
        <button onClick={() => setToggleCart(false)}>close</button>
        {cartItem.map((element, index) => (
          <div key={element.id}>
            {element.name} - {element.price}
            <button
              onClick={() => handleUpdateItem(element.id, element.quantity - 1)}
              disabled={element.quantity <= 1}
            >
              -
            </button>
            <span>{element.quantity}</span>
            <button
              onClick={() => handleUpdateItem(element.id, element.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => handleDeleteItem(element.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
