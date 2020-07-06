import React, { Component } from "react"; // class type
import "./App.css";
import Nav from "./components/Nav";
import Subject from "./components/Subject";
import Article from "./components/Article";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
        <Article></Article>
      </div>
    );
  }
}

export default App;
