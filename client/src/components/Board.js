import React from 'react';
import Cell from './Cell';
import './Board.css'; // Import the Board CSS file

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => onClick(index)}>
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
