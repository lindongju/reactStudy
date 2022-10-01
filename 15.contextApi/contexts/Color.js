import { createContext, useState } from "react";

// 새 Context를 만들 때는 createContext 사용
const ColorContext = createContext({
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// ColorContext.Provider 렌더링, value의 상태는 state, 업데이트함수는 actions
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer과 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
