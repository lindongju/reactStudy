//context Api 는 전역적으로 사용할 데이터가 있을 때 유용한 기능

import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/Color";

const App = () => {
  return (
    // provider를 사용하면 context의 value를 변경할 수 있음, Provider를 사용할 때는 value값을 명시해야 작동!!
    // <ColorContext.Provider value={{color : 'red'}}
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
