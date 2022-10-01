import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/Color";

const App = () => {
  return (
    // provider를 사용하면 context의 value를 변경할 수 있음, Provider를 사용할 때는 value값을 명시해야 작동!!
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
