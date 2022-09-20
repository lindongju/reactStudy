import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  //ref 설정할 부분
  myRef = null;

  //생성자 처음으로 컴포넌트 만들때 (최초한번 호출) -- mount
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // 컴포넌트가 최초실행될때 or 업데이트가 발생할때 -- mount, update
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  //컴포넌트를 만들고 첫 랜더링을 마친후 실행(최초한번) -- mount
  componentDidMount() {
    console.log("componentDidMount");
  }

  //변경이 일어났을 경우 리랜더링 할지말지 결정 -- update
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  //컴포넌트를 DOM에서 해제 (최초한번) -- unmount
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  //render에서 만들어진 결과물이 실제로 반영되기 전 호출 -- update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //리랜더링을 완료한 후 호출 -- update
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapShot) {
      console.log("업데이트되기 직전 색상 :", snapShot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* 에러발생코드 */}
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
