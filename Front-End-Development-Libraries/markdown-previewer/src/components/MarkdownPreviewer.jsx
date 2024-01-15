import React, { useState } from "react";
import { marked } from "marked";

const MarkdownPreviewer = () => {
  const initalText = `
  # BY: Nurudeen Abdulsalaam

  ## AS: freeCodeCamp [Project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
  
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
  
  **Happy Hacking!**  
  `
  const[markdown, setMardown] = useState(initalText)


  return (
    <div>

      <h1>Hello</h1>
        <div className="editor">
          <textarea id="editor"></textarea>
        </div>
        <div className="preview">
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
    </div>
  )
}

export default MarkdownPreviewer;