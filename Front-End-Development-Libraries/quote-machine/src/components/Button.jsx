import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className="button" id="new-quote" onClick={onClick}>
      New quote
    </button>
  );
};

export default Button;