import React from "react";
// 컴포넌트 필수 props 지정 혹은 props 타입 지정시 사용
import PropsTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
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

MyComponent.defaultProps = {
  name: "기본 이름", //name default = '기본이름'
};

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
    const {name, favoriteNumber, children} = this.props;
    return (...);
  }
}*/
