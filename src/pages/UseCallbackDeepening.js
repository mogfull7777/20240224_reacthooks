import React, { useCallback, useState } from "react";
import Box from "./Box";

function UseCallbackDeepening() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  //   const createBoxStyle = () => {
  //     return {
  //       backgroundColor: "pink",
  //       width: `${size}px`,
  //       height: `${size}px`,
  //     };
  //   }; // 배경 바꾸는 버튼이 눌러도 콘솔에 '박스 키우기'가 출력됨.

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]); // useCallback을 씌워줌.
  // 해석 ===> size함수가 변경되지 않는 이상 랜더링 되지 않는다.
  // ---> 왜? 우리는 메모라이즈된 createBoxStyle함수를 재사용하기 때문.

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default UseCallbackDeepening;
