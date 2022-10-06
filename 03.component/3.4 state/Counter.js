import { Component } from "react";

class Counter extends Component {
  //props 값을 변경하기 위해 state 사용 ()
  // state를 생성하려면 constructor 메서드 작성 필요
  // this.setState를 사용하여 state에 새로운 값을 넣을수 있음.
  // super(props)를 호출하면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 생성자 함수를 호출
  /* constructor(props) {
    super(props);
    this.state = {
      number:0
    };
  }*/

  //constructor 메서드 없이 state 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
