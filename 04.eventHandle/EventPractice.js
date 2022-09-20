/*
   1. 이벤트 이름은 카멜 표기법으로 작성
   2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수형태의 값을 전달
   3. DOM 요소에만 이벤트를 설정가능
*/

// import { Component } from "react";

// class EventPractice extends Component {
//   state = { message: "" };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({ message: e.target.value });
//           }}
//         ></input>
//         // 버튼을 공백으로 설정
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: "" });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

//import { Component } from "react";

// class EventPractice extends Component {
//   state = { message: "" };

//   constructor(props) {
//     super(props);
//     // 메서드 바인딩
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ message: e.target.value });
//   }

//   handleClick(e) {
//     alert(this.state.message);
//     this.setState({ message: "" });
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         ></input>
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

//클래스 컴포넌트
// class EventPractice extends Component {
//   state = { message: "", username: "" };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({ username: "", message: "" });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         ></input>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         ></input>
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// 함수컴포넌트
import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({ username: "", message: "" });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form의 내용을 복사 (username : '', message : '')
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      message: "",
      username: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="메세지입력"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
