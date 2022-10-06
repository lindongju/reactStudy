/*
  ※ useReducer
   - 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook
   - 리듀서는 현재상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수. (불변성 유지 필수)
*/

import { useReducer } from "react";

function reducer(state, action) {
  console.log({
    ...state,
  });
  return {
    ...state,
    [action.name]: action.value,
  };
}

// 여러개 상태를 관리해야하더라도 useReducer 하나로 처리가능
const ReducerInfo = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });
  const { name, nickName } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickName" value={nickName} onChange={onChange}></input>
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

export default ReducerInfo;
