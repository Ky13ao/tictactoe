import { useState, useEffect } from "react";
import getWinner from "../function/get_winner";
import botMove from "../function/bot_move";
import "../style/tictactoe.css";
import Board from "./Board";

export default function TicTacToeGame (props) {
  const [state, setState] = useState({
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    isXNext: true
  });
  const [isPVP, setPVP] = useState(false);
  useEffect(()=>{
    if(state.isXNext) return;
    if(isPVP) return;
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    handleClick(botMove(squares));
  });
  function handleClick(i){
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (getWinner(squares) || squares[i] ) return;
    squares[i] = state.isXNext ? 'X' : 'O';
    setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      isXNext: !state.isXNext,
    });
  }
  function jumpTo(step){
    setState({
      history: state.history,
      stepNumber: step,
      isXNext: (step % 2) === 0
    });
  }
  function handleChange(element){
    const option = parseInt(element.target.value)===1;
    if(option === isPVP) return;
    setPVP(option);
    jumpTo(0);
  }
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = getWinner(current.squares);
  const status = winner ? 'Winner: ' + winner : 'Next player : ' + (state.isXNext ? 'X' : 'O');
  const moves = history.map((_, move) => {
      const label = (move === 0) ? '↪' : '🔙#' + move + '.';
      return <li className="moves" key={move} onClick={() => jumpTo(move)}>{label}</li>});
  return <div id="game-container">
    <Board squares={current.squares} status={status} onClick={handleClick}/>
    <div id="util">
      <button onClick={() => jumpTo(0)}>Restart</button>
      <select onChange={handleChange}>
        <option value="0">Player vs Bot</option>
        <option value="1">Player vs Player</option>
      </select>
      <details id="game-history">
        <summary>History:</summary>
        <ul id="history">{moves}</ul>
      </details>
    </div>
  </div>
}
