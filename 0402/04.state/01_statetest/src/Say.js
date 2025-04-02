import React, { Component } from "react";

export default class Say extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      color: "black",
    };
  }
  setColor = (color) => {
    this.setState({ color });
  };
  onClickEnter = () => {
    this.setState({ message: "안녕하세요" });
  };
  onClickLeave = () => {
    this.setState({ message: "안녕히가세요" });
  };
  render() {
    return (
      <div>
        <button onClick={this.onClickEnter}>입장</button>
        <button onClick={this.onClickLeave}>퇴장</button>
        <h1 style={{ color: this.state.color }}>{this.state.message}</h1>
        <button
          onClick={() => {
            this.setColor("red");
          }}
        >
          red
        </button>
        <button
          onClick={() => {
            this.setColor("blue");
          }}
        >
          blue
        </button>
        <button
          onClick={() => {
            this.setColor("green");
          }}
        >
          green
        </button>
      </div>
    );
  }
}
