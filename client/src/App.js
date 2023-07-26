import Board from './components/Board';
import Status from './Status';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // This effect runs when the component mounts and whenever the state changes.
    // It checks if there is a winner and sets the `winner` state variable accordingly.
    const newWinner = calculateWinner(board);
    if (newWinner) {
      setWinner(newWinner);
    }
  }, [board]);

  function handleClick(i) {
    if (board[i] || winner) {
      return;
    }

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  }

  const calculateWinner = (board) => {
    // Check if there is a winner in the rows.
    for (let i = 0; i < 3; i++) {
      if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i]) {
        return board[i];
      }
    }

    // Check if there is a winner in the columns.
    for (let i = 0; i < 3; i++) {
      if (
        board[i * 3] === board[i * 3 + 1] &&
        board[i * 3] === board[i * 3 + 2] &&
        board[i * 3]
      ) {
        return board[i * 3];
      }
    }

    // Check if there is a winner in the diagonals.
    if (board[0] === board[4] && board[0] === board[8] && board[0]) {
      return board[0];
    } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
      return board[2];
    }

    // There is no winner.
    return null;
  };

  return (
    <div>
      <Board board={board} onClick={handleClick} />
      <Status winner={winner} xIsNext={xIsNext} />
      <button onClick={() => setBoard(Array(9).fill(null))}>Reset</button>
    </div>
  );
};

export default App;
