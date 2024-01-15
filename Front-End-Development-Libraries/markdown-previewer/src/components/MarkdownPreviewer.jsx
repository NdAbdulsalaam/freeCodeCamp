import React, { useState } from "react";
import { marked } from "marked";

const MarkdownPreviewer = () => {
  // ```
  // // this is multi-line code:

  // function anotherExample(firstLine, lastLine) {
  //   if (firstLine == '```' && lastLine == '```') {
  //     return multiLineCode;
  //   }
  // }
  // ```\n\n" +

  const initalText = "# Welcome to my React Markdown Previewer! \n\n" +

                    "## BY: Nurudeen Abdulsalaam \n\n" +

                    "### And here's some other cool stuff:\n\n" +

                    "Heres some code, `<div></div>`, between 2 backticks.\n\n" +

                   
                    " You can also make text **bold**... whoa!\n\n" +
                    "Or _italic_.\n\n" +
                    "Or... wait for it... **_both!_**\n\n" +
                    "And feel free to go crazy ~~crossing stuff out~~.\n\n" +

                    "There's also [links](https://www.freecodecamp.org), and\n\n" +
                    "> Block Quotes!\n\n" +

                    "And if you want to get really crazy, even tables:\n\n" +

                    "- And of course there are lists.\n\n" +
                    "  - Some are bulleted.\n\n" +
                    "    - With different indentation levels.\n\n" +
                    "        - That look like this.\n\n" +


                    "1. And there are numbered lists too.\n\n" +
                    "1. Use just 1s if you want!\n\n" +
                    "1. And last but not least, let's not forget embedded images:\n\n" +

                    "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n" +
                    "  **Happy Hacking!**"
                  
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