import React from "react";
import ReactDOM from "react-dom/client";
import QuoteApp from "@/components/QuoteApp";
// import '@/styles.css'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <h1>Hello React</h1>
    < QuoteApp />
  </React.StrictMode>
);



