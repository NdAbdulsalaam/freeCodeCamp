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
    <div class="buttons">
        <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top">
            <i class="fa fa-twitter"></i>
        </a>
        <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
            <i class="fa fa-tumblr"></i>
        </a>
        <button class="button" id="new-quote">New quote</button>
    </div>
  );
};

export default Button;