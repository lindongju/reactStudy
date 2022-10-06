import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      //아무것도 하지 않을때는 기존 상태 반환
      return state;
  }
}

const ReducerCounter = () => {
  // 첫번째 파라미터 : reducer function, 두번째 파라미터 : 해당 리듀서의 기본값
  // state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* dispatch(action) */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default ReducerCounter;
