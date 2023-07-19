import React from "react";

// const student = {
//   name: "evondev",
//   age: 28,
// };
// const name = student.name;
// const age = student.age;
// const {name, age} = student;
const Cell = ({ value, onClick, className }) => {
  // object destructuring
  // const {value, onClick} = props;
  // console.log(value, onClick);
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
