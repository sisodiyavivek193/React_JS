import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
class ClassCompoIntro extends Component {
  render() {
    const codeString = `class Car extends React.Component {
        render() {
          return <h2>Hi, I am a Car!</h2>;
        }
      }`;
    return (
      <>
        <div className="row">
          <div className="col-12">
            <p>Class Compo will be created by class</p>
            <p>In reactjs we are not able to create an object of any class</p>
            <p>
              React Will create its object by inheriting React.Component /
              Component
            </p>
            <p>render method will be responsible for the return</p>
            <p>Components are small peace of web page</p>
            <p>
              in reactJs we define component using class concepts are called
              class compo
            </p>
            <p>
              not like JS in React there is not require to create an object of
              that class but we just needs to inherit React.Compo prop
            </p>
            <p>and render will do return in class compo</p>
            <p>class keyword se class bnega</p>
            <SyntaxHighlighter language="jsx" style={monokai}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCompoIntro;
