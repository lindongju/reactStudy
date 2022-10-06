/*
  ※ useMemo
   - 함수 컴포넌트 내부에서 발생하는 연산은 최적화할 수 있다.

  ※ useCallBack
   - 렌더링 성능 최적화시 사용 (만들어놨던 함수를 재사용) 

  ※ useRef 
   - 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 함 
*/

import { useCallback, useMemo, useState, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useRef Hook, dom에서 ref를 이용해 설정하면 current값이 실제 엘리먼트를 가리킨다. 여기서는 input element
  const inputEl = useRef(null);

  //onChange가 일어날때도 getAverage를 탐
  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   };

  //   const onInsert = (e) => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber("");
  //   };

  // useCallback 이용하여 함수 재구성, 이미 만들어놨던 함수를 재사용(리렌더링 될때마다 새로 만들어진 함수사용 X)
  // 첫번째 파라미터에는 생성하고 싶은 함수, 두번째는 배열
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 랜더링 될때만 함수 생성

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  ); //number 혹은 list가 바뀌었을 때만 함수 생성

  //useMemo를 사용하면 list배열에 변경이 일어났을 때만 getAverage 함수 호출, 두번째 인자에 [list]를 넣어주면 list변경이 일어났을 때만
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 :</b> {avg}
      </div>
    </div>
  );
};

export default Average;
