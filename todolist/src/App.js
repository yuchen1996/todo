import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import TodoList from "./List/TodoList";


class App extends Component {
  render() {
    return (
        <TodoList />
      /*<div className="App">
        <header className="App-header">nigeiwn
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
