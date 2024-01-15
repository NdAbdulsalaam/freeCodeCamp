import React, { useState } from "react";
import { Marked } from "marked";

const MarkdownPreviewer = () => {
  const initalText = `
  # BY: Nurudeen Abdulsalaam

  ## AS: freeCodeCamp Project
  
  [View Project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
  
  Inline code: \`const variable = "Hello World";\`
  
  Code block:
  
  \`\`\`The day is bright
  function greet() {
    console.log("Hello World!");
  }
  \`\`\`
  
  - List item 1
  - List item 2
  
  > Blockquote: This is a blockquote.
  
  ![Markdown Image](../public/i-love-markdown.jpg)
  
  **Happy Hacking**  
  `
  const[markdown, setMardown] = useState('')


  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}

export default MarkdownPreviewer;