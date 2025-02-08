import Square from "./Square";

export default function Board (props) {
  function renderSquare(i){
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  }
  return <div id="game-board"><div id="util"><button onClick={props.onRestart} id="restart-button">Restart</button><button onClick={props.onBack} id="back-button">Back</button><label class="toggle"><input type="checkbox" onChange={props.toggleBotPlay} defaultChecked id="botplay-checkbox"/><span class="slider" /></label></div><div id="board"><div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div><div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div><div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div></div><h2 id="status">{props.status}</h2></div>;
}