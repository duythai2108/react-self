import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helplers";
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: "CLICK", payload: {}}
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   name: "evondev",
  // });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // console.log(boardCopy[index]);
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    // setState({
    //   ...state,
    //   board: Array(9).fill(null),
    //   xIsNext: true,
    // });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
