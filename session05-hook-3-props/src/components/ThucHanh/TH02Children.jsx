import React from "react";

// Cách 1
// function TH02Children({ people }) {

// Cách 2
// function TH02Children(props) {
//   const { name, age, address } = props.people;

// Cách 3:
function TH02Children({ people }) {
  const { name, age, address } = people;
  return (
    <div>
      <h5>
        {/* Cách 1 */}
        {/* {people.name} - {people.age} - {people.address} */}
        {/* Cách 2 */}
        {/* {name} - {age} - {address} */}
        {/* Cách 3 */}
        {name} - {age} - {address}
      </h5>
    </div>
  );
}

export default TH02Children;
