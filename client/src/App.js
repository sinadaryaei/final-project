import React, { useState } from 'react';
import TicTacToe from './TicTacToe';
import './App.css';
import calculateWinner from './gameUtils';

const socket = new window.WebSocket('ws://server:8000');
console.log('WebSocket server listening on port 8000');
function App() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
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

    if (socket.readyState === window.WebSocket.OPEN) {
      socket.send(JSON.stringify({ move: i }));
    }
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="game">
        <TicTacToe
          board={board}
          xIsNext={xIsNext}
          winner={winner}
          onClick={handleClick}
        />
      </div>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
