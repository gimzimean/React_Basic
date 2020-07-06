import React, { Component } from "react";

class Nav extends Component {
  render() {
    var list = [];
    var datas = this.props.data;
    var i = 0;
    while (i < datas.length) {
      list.push(
        <li>
          <a href={"/content/" + datas[i].id}>{datas[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default Nav;
