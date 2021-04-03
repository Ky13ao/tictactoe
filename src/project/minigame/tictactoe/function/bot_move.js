export default function botMove(squares){
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let line of lines){
    if(line.filter(move => squares[move]==='O').length===2) {
      for(let i of line) {
        if(!squares[i]) return i;
      }
    }
    if(line.filter(move => squares[move]==='X').length===2) {
      for(let i of line) {
        if(!squares[i]) return i;
      }
    }
  }
  let random = [4, 5, 3, 1, 7, 0, 8, 6, 2];
  for(let i of random){
    if(!squares[i]) return i;
  }
}