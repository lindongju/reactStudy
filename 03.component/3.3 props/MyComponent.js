import React from "react";
// 컴포넌트 필수 props 지정 혹은 props 타입 지정시 사용
import PropsTypes from "prop-types";

//children은 <MyComponent 태그 사이의 내용을 보여 준다
//{name favoriteNumber, children} 은 비구조화 할당 문법 (함수의 파라미터가 객체라면 값을 비구조화해서 사용)
//{name : react, favoriteNumber : 1, children : react}
//비구조화 할당 문법 사이트 : https://ossam5.tistory.com/161
const MyComponent = ({ name, favoriteNumber, children }) => {
  // props를 바로 비구조화할당 할 수 도 있음 myComponent에 props를 받아야함
  // const { name, favoriteNumber, children } = props;

  return (
    <div>
      안녕하세요 제 이름은 {name} 입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

// props 값을 따로 설정하지 않았을때 기본 값
MyComponent.defaultProps = {
  name: "기본 이름", //name default = '기본이름'
};

// 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할때는 propTypes를 사용
// import PropTypes from 'prop-types'
// propTypes 정보 : https://github.com/facebook/prop-types
MyComponent.propTypes = {
  name: PropsTypes.string, //name은 문자열 형태로
  favoriteNumber: PropsTypes.number.isRequired, // number은 number형태 아니면 경고
};

export default MyComponent;

// 클래스 형 컴포넌트로 변경
/* import {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name : PropsTypes.string,
    favoriteNumber : PropsTypes.number.isRequired
  };
  render() {
    
    // 비구조화 할당 this.props(모두)
    const {name, favoriteNumber, children} = this.props;
    return (...);
  }
}*/
