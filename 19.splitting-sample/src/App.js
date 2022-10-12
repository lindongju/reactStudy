/**
 * React.lazy는 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해주는 유틸 함수
 * const SplitMe = React.lazy(() => import('./SplitMe'));
 *
 * Suspense는 리액트 내장 컴포넌트로 코드 스플리팅된 컴포넌트를 로딩하도록 발동, 로딩이 끝나지 않았을 때 보여줄 UI를 설정
 *
 * import {Suspense} from 'react';
 *
 * <Suspense fallback={<div>loading...</div>}
 *  <SplitMe />
 * </Suspense>
 *
 * Loadable Comopnents는 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리 (서버사이드 렌더링을 지원)
 * 서버 사이드 렌더링 : 웹서비스의 초기 로딩 속도 개선, 캐싱 및 검색 엔진 최적화를 가능하게 해주는 기술
 */

// import { Component } from "react";
import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";

//notify를 import해서 사용하는 방법 (기본)
//import notify from "./notify";

// function App() {
//   const onClick = () => {
//     //notify를 import해서 사용하는 방법 (기본)
//     // notify();

//     // import 함수로 사용하면 promise를 반환, 모듈에서 result로 내보낸 것은 result.default를 참조해야 사용할 수 있음
//     import("./notify").then((result) => result.default());
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React! aa</p>
//       </header>
//     </div>
//   );
// }

// Component에서 State를 이용한 코드 스플리팅
// class App extends Component {
//   state = {
//     SplitMe: null,
//   };
//   handleClick = async () => {
//     const loadedModule = await import("./SplitMe");
//     this.setState({
//       SplitMe: loadedModule.default,
//     });
//   };

//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     );
//   }
// }

// lazy사용
// const SplitMe = React.lazy(() => import("./SplitMe"));

// function App() {
//   const [visible, setVisible] = useState(false);
//   const onClick = () => {
//     setVisible(true);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}> HelloReact!</p>
//         {/* Suspense에서 fallback props을 통해 로딩중에 보여줄 JSX를 지정할 수 있음 */}
//         <Suspense fallback={<div>loading...</div>}>
//           {visible && <SplitMe />}
//         </Suspense>
//       </header>
//     </div>
//   );
// }

//loadable 사용 (로딩중에 다른 UI를 보여주고 싶다면 fallback이용)
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    // 컴포넌트를 미리 불러온다
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
