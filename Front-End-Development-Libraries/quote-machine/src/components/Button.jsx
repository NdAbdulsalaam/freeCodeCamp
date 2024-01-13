// const Button = function ({getQuote, quote}){
//     return(
//         <div className="buttons">
//              <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top">
//                 <i className="fa fa-twitter"></i>
//             </a>
//             <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
//                 <i className="fa fa-tumblr"></i>
//             </a>
//             <button className="button" id="new-quote" onClick={getQuote}>New quote</button>
//         </div>  
//     )
// }

// export default Button

import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className="button" id="new-quote" onClick={onClick}>
      New quote
    </button>
  );
};

export default Button;