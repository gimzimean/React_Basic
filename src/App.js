import React, { Component } from "react"; // class type
import "./App.css";
import Nav from "./components/Nav";
import Subject from "./components/Subject";
import Article from "./components/Article";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Subject></Subject>
//         <Nav></Nav>
//         <Article></Article>
//       </div>
//     );
//   }
// }
class App extends Component {
  constructor(props) {
    //render 보다 먼저 실행하면서 컴포넌트들을 초기화 하기. state 값을 초기화하기
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "WORLD WIDE WEB!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for Information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Nav data={this.state.contents}></Nav>
        <Article title="HTML" desc="HTML is Hyper Text Markup Language"></Article>
      </div>
    );
  }
}

export default App;
