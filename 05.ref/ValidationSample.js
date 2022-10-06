//ref를 사용하는 방법에 대해
// html에서 DOM에 접근하려면 document.getElementById를 사용해야하지만 리액트에서는 state로 구현가능

/* ref를 사용하는 가장 기본적인 방법은 콜백함수 사용 (ref를 달고자 하는 요소에 ref라는 콜백함수를 props로 전달)
 <input ref = {(ref) => {this.input = ref}} />;

  두번째 방법은 createRef 함수 사용
  input = React.createRef();
  <input ref = {this.input} />
  호출시에는 this.input.current;

*/
import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <div>
        <input
          //input이라는 DOM에 직접적으로 접근하기 위해 ref라는 콜백함수를 props로 전달 this.input를 this.inputa로 줘도 무방
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
