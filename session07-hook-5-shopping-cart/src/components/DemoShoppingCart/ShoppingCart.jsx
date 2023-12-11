import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function ShoppingCart() {
  // Tạo state chứa data sản phẩm
  const [products, setProducts] = useState([
    { id: 1, name: "Áo Thun", price: "50" },
    { id: 2, name: "Áo Khoác", price: "250" },
    { id: 3, name: "Quần Âu", price: "300" },
  ]);

  // State chứa các sản phẩm được thêm vào component cart
  const [cartItem, setCartItem] = useState([]);

  // Xây dựng hàm addToCart để truyền xuống component Product
  const addToCart = (product) => {
    const exstingItem = cartItem.find((item) => item.id === product.id);
    if (exstingItem) {
      exstingItem.quantity += 1;
      setCartItem([...cartItem]);
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  //  Làm modal hiển thị giỏ hàng
  const [toggleCart, setToggleCart] = useState(false);

  // Viết hàm cập nhật quantity sản phẩm
  const handleUpdateItem = (itemId, newQuantity) => {
    console.log(newQuantity);
    const updateItem = cartItem.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItem(updateItem);
  };

  // Viết hàm xóa item khỏi cart
  const handleDeleteItem = (itemId) => {
    // splice
    // filter
    const deleteItem = cartItem.filter((item) => item.id !== itemId);
    setCartItem(deleteItem);
  };

  return (
    <div className='cart-modal'>
      <h1>Shopping Cart</h1>
      <div>
        <h3>Sản phẩm</h3>
        <ul>
          {products.map((element, index) => (
            <Product
              key={index}
              element={element}
              index={index}
              addToCart={addToCart}
            />
          ))}
        </ul>

        {/* Giỏ hàng */}
        <div onClick={() => setToggleCart(true)}>
          Giỏ hàng {cartItem.length}
        </div>

        {/* 
            Toán tử 3 ngôi là if else => ? :
            Toán tử if => &&
        */}
        {toggleCart && (
          <Cart
            setToggleCart={setToggleCart}
            cartItem={cartItem}
            handleUpdateItem={handleUpdateItem}
            handleDeleteItem={handleDeleteItem}
          />
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
