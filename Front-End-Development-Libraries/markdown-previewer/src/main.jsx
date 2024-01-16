import React from "react";
import ReactDOM from "react-dom/client";
import MarkdownPreviewer from "@/components/MarkdownPreviewer";
import '@/index.css'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <h1 className="text-3xl text-red-600 font-bold underline">
      Hello world!
    </h1>
    < MarkdownPreviewer />
  </React.StrictMode>
);



