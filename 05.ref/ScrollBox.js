import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    // DOM 노드중 scrollHeight, clientHeight, scrollTop 값이 있음
    // const scrollHeight = this.box.scrollHeight;
    // const clientHeight = this.box.clientHeight;
    const { scrollHeight, clientHeight } = this.box;

    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      // this.box는 Dom객체의 Div를 가리킴 (style이 적용되어있는 )
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
