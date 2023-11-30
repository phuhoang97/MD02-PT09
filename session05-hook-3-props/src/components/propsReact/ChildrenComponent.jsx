import React from "react";

// function ChildrenComponent(props) {
//   console.log(props); // numberProps : 100

function ChildrenComponent({ numberProps, stringProps }) {
  console.log(numberProps, stringProps);
  /*
    {
        numberProps: 100,
        stringProps: "Hello"
    }

    => Destructoring 
  */

  return (
    <div>
      <h3>ChildrenComponent</h3>
      <p>
        Number là: {numberProps} - {stringProps}
      </p>
    </div>
  );
}

export default ChildrenComponent;
