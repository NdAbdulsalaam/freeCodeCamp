import React from "react";
import ReactDOM from "react-dom/client";
import MarkdownPreviewer from "@/components/MarkdownPreviewer";
// import '@/styles.css'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    < MarkdownPreviewer />
  </React.StrictMode>
);



