import React from 'react';
import Board from './components/Board';
import './TicTacToe.css';

const TicTacToe = ({ board, xIsNext, winner, onClick }) => {
  const calculateWinner = (board) => {
    // Check if there is a winner in the rows.
    for (let i = 0; i < 3; i++) {
      if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i]) {
        return board[i];
      }
    }

    // ... (remaining logic for calculating winner in columns and diagonals)
  };

  function handleClick(i) {
    if (board[i] || winner) {
      return;
    }

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    const newWinner = calculateWinner(newBoard);

    onClick(newBoard, !xIsNext, newWinner); // Call the onClick function passed from the parent (App.js)
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {/* Render the Board component */}
        <Board board={board} onClick={handleClick} />
      </div>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <button className="reset-btn" onClick={() => onClick(-1)}>
        {/* Pass -1 as a special value to indicate the Reset button click */}
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
