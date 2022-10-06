/*
  ※ useEffect 
   - 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook (ComponentDidMount와 ComponentDidUpdate를 합친 형태)
*/
import { useState, useEffect } from "react";

// 여러개 상태를 관리해야할때는 여러개의 state를 사용
const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  // 리액트 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정하는 HOOK
  //   useEffect(() => {
  //     console.log("랜더링이 완료되었습니다.");
  //     console.log({ name, nickName });
  //   });

  // 두번째 파라미터로 비어있는 배열을 넣으면 마운트될때만 실행되고 업데이트가 일어날 경우에는 실행하지 않음
  //   useEffect(() => {
  //     console.log("마운트될 때만 실행됩니다.");
  //   }, []);

  // 두번째 파라미터로 name을 넣으면 name값이 변경될때만 호출할 수 있다.
  //   useEffect(() => {
  //     console.log(name);
  //   }, [name]);

  // 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리함수(cleanUp)를 반환해 주어야함, 언마운트 될때만 호출하려면 두번째인자를 []로 변경
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanUp");
      console.log(name);
    };
  }, [name]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChange}></input>
        <input value={nickName} onChange={onChangeNickName}></input>
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
