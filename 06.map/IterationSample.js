import { useState } from "react";

const IterationSample = () => {
  // 객체형태로 이루어진 배열
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  //nextId는 5로 초기화
  const [nextId, setNextId] = useState(5);

  //변경이 일어날때마다 inputText에 value값 추가
  const onChange = (e) => setInputText(e.target.value);

  //
  const onClick = () => {
    //0 : {id: 2, text: '얼음'} 이런형식으로 새로운 배열 생성
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    console.log(nextNames);

    //nextId 1추가해서 inputText에 저장
    setNextId(nextId + 1);
    // names에 array로 저장
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    console.log(nextNames);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text} || {name.id}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
