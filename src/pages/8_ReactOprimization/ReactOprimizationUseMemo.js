import React, { useMemo, useState } from "react";
import ChildUseMemo from "./ChildUseMemo";

function ReactOprimizationDeep() {
  const [parentAge, setParentAge] = useState(0);

  const incrememntPrentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("👨‍👩‍👦 위에서 부터 부모컴포넌트가 렌더링 되었습니다.");

  const name = useMemo(() => {
    return {
      lastName: "홍",
      fristName: "길동",
    };
  }, []);

  // 오브젝트로 넘길 시 원시타입이 아닌 객체타입이여서 주소를 할당 받아 memo를 해도 렌더링이 된다.
  // ===> useMemo로 해결.

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>👨‍👩‍👦부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrememntPrentAge}>부모 나이 증가</button>

      <ChildUseMemo name={name} />
    </div>
  );
}

export default ReactOprimizationDeep;
