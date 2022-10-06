import { useState } from "react";

// 함수 컴포넌트에서 useState사용
const Say = () => {
  // setMessage (세터함수)
  // useState초기값 => 함수호출시 배열이 반환 (첫 번째 요소는 현재상태, 두 번째 요소는 상태를 바꾸는 함수)
  // 이를 배열 비구조화 할당으로 message = [0], setMessage = [1]로 할당
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");

  // color : red
  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
