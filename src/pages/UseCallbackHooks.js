import React, { useCallback, useEffect, useState } from "react";

function UseCallbackHooks() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true); // someFunction의 메모이제이션된 함수를 사용하기 때문에 useEffect가 발동안함.

  //   const someFunction = () => {
  //     console.log(`someFunc : number : ${number}`);
  //     return; // 1-1. 변수에 할당된 객체이기 때문에 원시데이터가 아닌 객체타입의 데이터여서 주소로써 저장됨.
  //   };
  // ---> 아래처럼 변경

  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]); // 1-2. 그렇기때문에 새 주소로 할당되어 재렌더링되므로 useEffect가 적용됨.

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>Call someFunc</button>
      <br />
      <br />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
    </div>
  );
}

export default UseCallbackHooks;

// 리액트의 컴포넌트를 사용할때마다 다시 렌더링이된다. -> 함수형 컴포넌트는 사용될때마다 다시 호출.
