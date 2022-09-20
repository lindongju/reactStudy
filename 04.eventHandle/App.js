import EventPractice from "./EventPractice";

const App = () => {
  return <EventPractice />;
};
export default App;

import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        {
          // ScrollBox의 내부 메서드 및 멤버변수에 접근(내부의 ref에 접근)
        }
        <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
        {
          // 버튼을 누를 때 값을 읽어와서 실행
        }
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
