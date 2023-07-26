// import React, { useState, useEffect } from 'react';
// import TicTacToe from './TicTacToe';
// import './App.css';
// import calculateWinner from './gameUtils';
// import { io } from 'socket.io-client';

// function App() {
//   const initialBoard = Array(9).fill(null);
//   const [board, setBoard] = useState(initialBoard);
//   const [xIsNext, setXIsNext] = useState(true);
//   const [winner, setWinner] = useState(null);

//   const socket = io('http://localhost:8000'); // Connect to the Socket.IO server

//   useEffect(() => {
//     socket.on('message', (data) => {
//       if (data.isGameOver) {
//         // Handle game over
//       } else if (data.board) {
//         // Update the board state
//         setBoard(data.board);
//       }
//     });

//     // Clean up the WebSocket connection when the component unmounts
//     return () => {
//       socket.close();
//     };
//   }, []);

//   const handleClick = (i) => {
//     if (board[i] || winner) {
//       return;
//     }

//     const newBoard = board.slice();
//     newBoard[i] = xIsNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setXIsNext(!xIsNext);

//     const newWinner = calculateWinner(newBoard);
//     if (newWinner) {
//       setWinner(newWinner);
//     }

//     if (socket.connected) {
//       socket.send({ move: i });
//     }
//   };

//   const handleReset = () => {
//     setBoard(initialBoard);
//     setXIsNext(true);
//     setWinner(null);
//   };

//   return (
//     <div>
//       <h1>Tic Tac Toe</h1>
//       <div className="game">
//         <TicTacToe
//           board={board}
//           xIsNext={xIsNext}
//           winner={winner}
//           onClick={handleClick}
//         />
//       </div>
//       <button className="reset-btn" onClick={handleReset}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;
