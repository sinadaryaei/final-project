import React from 'react';

const Status = ({ winner, xIsNext }) => {
  return (
    <div className="status">
      {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
    </div>
  );
};

export default Status;
