import React from 'react';

const Logic = ({ quotes, onQuoteChange }) => {
  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    onQuoteChange(randomQuote);
  };

  return (
    <div>
      {/* Your logic component JSX */}
      {/* Use getRandomQuote function when needed */}
    </div>
  );
};

export default Logic;



