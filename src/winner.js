 //1->O
 //2->X

//[0,0,0,0,0,0,0,0,0]

//[1,2,1,2,1,1,2,1,2]
//[0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0]


export function calculateWinner(squares) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: line };
    }
  }

  return { winner: null, winningSquares: [] };
}
