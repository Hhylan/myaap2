import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathJax from './MathJax';
import Demo from './demo'

class App extends Component {
  render() {
    const mt='   When $a \\ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\) and they are\n' +
             '  $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MathJax math={mt} />
      <hr/>
        <Demo/>
      </div>
    );
  }
}

export default App;
