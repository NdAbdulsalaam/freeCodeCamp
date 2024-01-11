import React from "react";
// import SocialMedia from "./Components/SocialMedia";
import Button from "@/components/Button";
import Contributor from "@/components/Contributor";
import FetchQuote from '@/components/FetchQuote';
// import Title from "./Components/Title";

// const QuoteApp = function App() {
//   const [quotes, setQuotes] = React.useState([]);
//   const [randomQuote, setRandomQuote] = React.useState("");
//   const [color, setColor] = React.useState("#16a085'");

//   React.useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://type.fit/api/quotes");
//       const data = await response.json();
//       setQuotes(data);
//       let randIndex = Math.floor(Math.random() * data.length);
//       setRandomQuote(data[randIndex]);
//     }
//     fetchData();
//   }, []);

//   const getNewQuote = () => {
//     const colors = [ '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
//                     '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
//     let randIndex = Math.floor(Math.random() * quotes.length);
//     let randColorIndex = Math.floor(Math.random() * colors.length);
//     setRandomQuote(quotes[randIndex]);
//     setColor(colors[randColorIndex]);
//   };

//   return (
//     <div style={{ backgroundColor: color, minHeight: "100vh" }}>
//       <div className="container pt-5 custom-container">
//         <div className="jumbotron" id="quote-box">
//           <div className="card">
//             <Title/>
//             <div className="card-body text-center">
//               {randomQuote ? (
//                 <>
//                   <p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
//                   <h5 id="author" className="card-title mb-4">~ {randomQuote.author || "Anonymous"}</h5>
//                 </>
//               ) : (
//                 <h2>Loading...</h2>
//               )}
//                   <div className="flex">
//                     <SocialMedia quote={randomQuote}/>
//                     <Button action={getNewQuote}/>
//                   </div>
//             </div>
//           </div>
//           <Owner/>
//         </div>
//       </div>
//     </div>
//   );
// }

const QuoteApp = function() {
  return(
    <>
      <FetchQuote />
    </>
  )
}

export default QuoteApp;
