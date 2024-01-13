import React, { useEffect, useState } from 'react';

const Logic = ({ quotes }) => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [colors] = useState([
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ]);

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const getQuote = () => {
    const randomQuote = getRandomQuote();

    setCurrentQuote(randomQuote);

    const tweetUrl =
      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + randomQuote.quote + '" ' + randomQuote.author);

    const tumblrUrl =
      'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(randomQuote.author) +
      '&content=' +
      encodeURIComponent(randomQuote.quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';

    // Set your state or dispatch actions to update UI accordingly
    console.log('Random Quote:', randomQuote);
    console.log('Tweet URL:', tweetUrl);
    console.log('Tumblr URL:', tumblrUrl);
  };

  useEffect(() => {
    getQuote();
  }, []); // Run once on component mount

  return (
    <div>
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">{currentQuote.quote}</span>
      </div>
      <div className="quote-author">- <span id="author">{currentQuote.author}</span></div>
      <div className="buttons">
        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
          <i className="fa fa-tumblr"></i>
        </a>
      </div>
    </div>
  );
};

export default Logic;