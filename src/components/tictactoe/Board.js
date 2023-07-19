import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helplers";

const Board = (props) => {
  console.log(props);
  // // Array(9).fill() -> []
  // const cells = [null, null, null, "X", "X", "X", null, null, null];
  // console.log(calculateWinner(cells));
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={
            item !== null && item === "X" ? "is-x" : item === "O" ? "is-o" : ""
          }
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
