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
