import ColorContext from "../contexts/Color";
import { useContext } from "react";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {/* Function as a child, Render Props
//           컴포넌트의 child가 있어야할 자리에 일반 jsx 혹은 문자열이 아닌 함수를 전달
//           // 객체 비구조화 할당
//       */}
//       {({ state }) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: state.color,
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

export default ColorBox;
