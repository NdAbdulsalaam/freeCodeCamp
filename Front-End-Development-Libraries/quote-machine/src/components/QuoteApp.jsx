// import React from "react";
// // import SocialMedia from "./Components/SocialMedia";
// import Button from "@/components/Button";
// import Contributor from "@/components/Contributor";
// import FetchQuote from '@/components/FetchQuote';


// const QuoteApp = function() {
  
//     $('#tweet-quote').attr(
//       'href',
//       'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
//         encodeURIComponent('"' + quote + '" ' + author)
//     );
  
//     $('#tumblr-quote').attr(
//       'href',
//       'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
//         encodeURIComponent(author) +
//         '&content=' +
//         encodeURIComponent(quote) +
//         '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
//     );
  
//     $('.quote-text').animate({ opacity: 0 }, 500, function () {
//       $(this).animate({ opacity: 1 }, 500);
//       $('#text').text(randomQuote.quote);
//     });
  
//     $('.quote-author').animate({ opacity: 0 }, 500, function () {
//       $(this).animate({ opacity: 1 }, 500);
//       $('#author').html(randomQuote.author);
//     });
  
//     var color = Math.floor(Math.random() * colors.length);
//     $('html body').animate(
//       {
//         backgroundColor: colors[color],
//         color: colors[color]
//       },
//       1000
//     );
//     $('.button').animate(
//       {
//         backgroundColor: colors[color]
//       },
//       1000
//     );
//   }
  
//   $(document).ready(function () {
//     getQuotes().then(() => {
//       getQuote();
//     });
  
//     $('#new-quote').on('click', getQuote);
//   });
//   return(
//       <div id="wrapper">
//       <div id="quote-box">
//       <FetchQuote />
//       <Button getQuote={getQuote} />
//       </div>
//     </div>
//   )
// }

// export default QuoteApp;

// QuoteApp.js
import React, { useState } from 'react';
import FetchQuote from '@/components/FetchQuote';
import Logic from '@/components/Logic';
import Button from '@/components/Button';

const QuoteApp = () => {
  const [quotes, setQuotes] = useState([]);

  const handleDataFetch = (data) => {
    setQuotes(data);
  };

  return (
    <div id="wrapper">
      <div id="quote-box">
        <FetchQuote onDataFetch={handleDataFetch} />
        <Logic quotes={quotes} />
        <Button />
      </div>
      <div className="footer">by <a href="https://github.com/ndabdulsalaam" target="_blank">Nurudeen Abdulsalaam</a></div>
    </div>
  );
};

export default QuoteApp;