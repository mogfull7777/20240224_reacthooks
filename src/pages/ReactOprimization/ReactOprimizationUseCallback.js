import React, { useCallback, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";

function ReactOprimizationUseCallback() {
  const [parentAge, setParentAge] = useState(0);

  const incrememntPrentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("👨‍👩‍👦 위에서 부터 부모컴포넌트가 렌더링 되었습니다.");

  const tellMe = useCallback(() => {
    console.log("길동아 사랑해 🥰");
  }, []);

  // 자바스크립트에서의 함수는 객체이다.
  // useMemo는 어떤 객체를 메모라이징하기위해 사용.
  // useCallback는 어떤 함수를 메모라이징하기위해 사용.
  // useCallback을 사용하면 항상 같은 주소를 가지게 된다.

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>👨‍👩‍👦부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrememntPrentAge}>부모 나이 증가</button>

      <ChildUseCallback name={"홍길동"} tellMe={tellMe} />
      {/* tellMe가 함수로 전달 받고 있기에 부모 랜더링 되면 자식도 랜더링됨. */}
    </div>
  );
}

export default ReactOprimizationUseCallback;
