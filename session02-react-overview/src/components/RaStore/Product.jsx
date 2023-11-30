import React from "react";

function Product({ element }) {
  // console.log(element);
  return (
    <a href=''>
      <div className='product_box'>
        <div className='product_img-box'>
          <img src={element.src} alt='photo' />
          <span> Sale </span>
        </div>
        <div className='product_detail-box'>
          <span> {element.price} </span>
          <p>Passage of Lorem Ipsum, you</p>
        </div>
      </div>
    </a>
  );
}

export default Product;
