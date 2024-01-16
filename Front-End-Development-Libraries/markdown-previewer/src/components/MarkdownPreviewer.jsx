import React, { useState } from "react";
import { marked } from "marked";

const MarkdownPreviewer = () => {
  const initialText = `
  # Welcome to my React Markdown Previewer!
  
  ## By: Nurudeen Abdulsalaam...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine === '\\\`\`\`' && lastLine === '\\\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  | Wild Header     | Crazy Header    | Another Header? |
  | --------------- | --------------- | --------------- |
  | Your content can | be here, and it | can be here.... |
  | And here.       | Okay.           | I think we get it. |
  
  
  - And of course, there are lists.
    - Some are bulleted.
      - With different indentation levels.
        - That look like this.
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![Markdown cover image](/i-love-markdown.jpg)
  `;
  
  console.log(initialText);
  

  const[markdown, setMardown] = useState(initialText)

  const handleChange = (e) => {
    setMardown(e.target.value);
  }


  return (
    <div className="container mt-5">
      <div className="bg-blue-400">
        <div className="bg-blue-400">
          <div className="editor">
            <h2>Editor</h2>
            <textarea
              id="editor"
              className="form-control"
              value={markdown}
              onChange={handleChange}
              rows="10"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="preview">
            <h2>Previewer</h2>
            <div
              id="preview"
              className="border p-3"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default MarkdownPreviewer;