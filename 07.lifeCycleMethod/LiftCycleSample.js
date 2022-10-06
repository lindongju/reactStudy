/*
  라이프 사이클 메서드.. 총 9가지
  Will 접두사가 붙은 경우는 어떤 작업을 작동하기 전에 발동
  Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후 실행
  마운트, 업데이트, 언마운트 3가지로 나눔

  컴포넌트가 마운트될 때 호출하는 메서드
  1. constructor : 컴포넌트를 새로 만들때 마다 호출되는 클래스 메서드
  2. getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드
  3. render : UI를 렌더링하는 메서드
  4. componentDidMount : 컴포넌트가 웹 브루저상에 나타난 후 호출하는 메서드

  컴포넌트가 업데이트 되는 경우
  1. props가 변경될 때
  2. state가 바뀔 때
  3. 부모 컴포넌트가 리렌더링될 때
  4. this.forceUpdate로 강제로 렌더링을 트리거할 때

  ※ render
   - 컴포넌트의 모양새를 정의
   - this.props와 this.state에 접근할 수 있으며 리액트 요소를 반환한다.
   - 이벤트 설정이 아닌 곳에서 setState를 사용하면 안되며, 브라우저의 DOM에 접근해서도 안됨.

  ※ constructor
   - 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행 (초기 state설정 가능)

  ※ getDerivedStateFromProps
   - props로 받아 온 값을 state엥 동기화시키는 용도, 컴포넌트가 마운트되거나 업데이트 될 때
   
  ※ componentDidMount
   - 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행 (라이브러리, 함수, 이벤트 등록, 네트워크 요청같은 비동기 작업 처리) 

  ※ shouldComponentUpdate
   - props나 state를 변경했을 때 리렌더링을 할지 말지 여부를 지정하는 메서드 true, false값 반환필요
  
  ※ getSnapshowBeforeUpdate
   - render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
   - 업데이트하기 직전의 값을 참고할 일이 있을 때 활용

  ※ componentDidUpdate 
   - 리렌더링을 완료한 후 실행, 컴포넌트가 이전에 가졌던 데이터에 접근 가능
   
  ※ componentWillUnmount
   - 컴포넌트를 DOM에서 제거할 때 실행
   
  ※ componentDidCatch
   - 렌더링 도중 에러가 발생했을 때 애플리케이션이 먹통이 되지않고 오류를 보여줄 수 있게 함 
*/
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
  // nextProps Props가 변경될때
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color }; // state에 color값 동기화
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
        {/* {this.props.missing.value} */}
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
