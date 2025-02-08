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
  function jumpTo(step = state.history.length-3){
    setState({
      history: state.history,
      stepNumber: step,
      isXNext: (step % 2) === 0
    });
  }
  function handleToggleBotPlay(element){
    const option = !element.target.checked;
    if(option === isPVP) return;
    setPVP(option);
    jumpTo(0);
  }
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = getWinner(current.squares);
  const status = winner ? 'Winner: ' + winner : 'Next player : ' + (state.isXNext ? 'X' : 'O');
  return <div id="game-container"><Board squares={current.squares} status={status} onClick={handleClick} onRestart={() => jumpTo(0)} onBack={() => jumpTo()} toggleBotPlay={handleToggleBotPlay}/></div>;
}
