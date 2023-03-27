import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

class ClassCompoConstructor extends Component {
  constructor(props) {
    super(props);
    console.log("vivek");
  }
  render() {
    const codeString = `constructor(props) {
        super(props);
       console.log("called con");
   }`;
    return (
      <>
        <h3>Constructor</h3>
        <p>
          Constructor is a method which is invoked by default when components
          are called
        </p>
        <p>
          Render is also calling by default but render used for give response to
          the compo
        </p>
        <p>Constructor will use for initiate some value</p>
        <p>
          constructor ni andar super no use atle thai che ke aena parent ni
          andar nu constructor bandh na thai atale apde super lakhiye chiye
        </p>
        <SyntaxHighlighter language="jsx" style={monokai}>
          {codeString}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default ClassCompoConstructor;
