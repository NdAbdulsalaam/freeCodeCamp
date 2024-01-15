import React from "react";
import ReactDOM from "react-dom/client";
import MarkdownPreviewer from "@/components/MarkdownPreviewer";
import GPT from '@/components/GPT'
import '@/styles.css'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    {/* < GPT /> */}
    < MarkdownPreviewer />
  </React.StrictMode>
);



