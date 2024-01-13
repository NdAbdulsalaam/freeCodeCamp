// import React, { useEffect, useState } from 'react';
// import Button from '@/components/Button';

// function QuoteFetcher() {
//   const [quoteData, setQuoteData] = useState({ quote: '', author: '' });

//     const getQuote = async () => {
//       try {
//         const response = await fetch(
//           'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
//           {
//             headers: {
//               Accept: 'application/json',
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to fetch quote: ${response.status}`);
//         }

//         const { quotes } = await response.json();
//         const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//         setQuoteData({
//           quote: randomQuote.quote,
//           author: randomQuote.author,
//         });
//       } catch (error) {
//         console.error('Error fetching quote:', error);
//       }
//     };
//     useEffect (() => {
//       getQuote();
//   }, []);

//   return (
//     <>
//       <h1>{quoteData.quote}</h1>
//       <Button getQuote={getQuote} />
//     </>
//   );
// }

// export default QuoteFetcher;

import React, { useEffect, useState } from 'react';

const CodeFetcher = ({ onDataFetch }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        );
        const data = await response.json();
        onDataFetch(data.quotes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [onDataFetch]);

  return null;
};

export default CodeFetcher;