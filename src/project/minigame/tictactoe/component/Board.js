import Square from "./Square";

export default function Board (props) {
  function renderSquare(i){
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  }
  return <div id="game-board">
    <h2 id="status">{props.status}</h2>
    <div id="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  </div>
}