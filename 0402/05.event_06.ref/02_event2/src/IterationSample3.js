import React, { Component } from "react";

class IterationSample3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "바람" },
        { id: 4, text: "봄" },
        { id: 5, text: "꽃망울" },
      ],
      inputText: "",
      nextId: 6,
    };
  }

  handleRemove = (id) => {
    this.setState((prevState) => ({
      names: prevState.names.filter((name) => name.id !== id),
    }));
  };

  handleClick = () => {
    this.setState((prevState) => ({
      names: prevState.names.concat({ id: prevState.nextId, text: prevState.inputText }),
      nextId: prevState.nextId + 1,
      inputText: "",
    }));
  };

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    const nameList = this.state.names.map((name) => (
      <li key={name.id} onClick={() => this.handleRemove(name.id)}>
        {name.text}
      </li>
    ));

    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample3;
