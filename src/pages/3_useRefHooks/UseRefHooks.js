import React, { useState, useRef } from "react";

function UseRefHooks() {
  const [count, setCount] = useState(0);
  // 그냥 스테이트만 사용하면 화면이 계속 리 렌더링 되는 것이다.
  const countRef = useRef(0);
  // countRef.current에 변화를 줘도 당장은 출력이 안됨. => 왜? 화면이 렌더링 되지 않았기 때문.
  let countVar = 0;
  const [renderer, setRenderer] = useState(0);

  const doRendring = () => {
    setRenderer(renderer + 1);
  };

  const increaseCountState = () => {
    setCount(count + 1);
    console.log("State :", count);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref : ", countRef);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var :", countVar);
  };

  const printResults = () => {
    console.log(
      `State : ${count} ,ref : ${countRef.current}, var : ${countVar}`
    );
  };

  return (
    <div>
      <h4>State : {count}</h4>
      <h4>Ref : {countRef.current}</h4>
      <h4>Var : {countVar}</h4>
      <button onClick={doRendring}>렌더링!</button>
      <button onClick={increaseCountState}>State 올리기</button>
      <button onClick={increaseCountRef}>Ref 올리기</button>
      <button onClick={increaseVar}>Var 올리기</button>
      <button onClick={printResults}>현재 State, Ref, Var 값 출력</button>
    </div>
  );
}

export default UseRefHooks;

// Ref의 장점.
// 1. state로 자주바뀌는 값을 설정해주면 계속 렌더링 하게되면 성능에 안좋은 영향을 미침.
// 2. 값이 바뀌어도 렌더링이 안되면 변화된 값을 저장하되 성능저하는 방지함.
// 3. 즉, 변화는 감지해야하지만 그 변화가 랜더링을 발생 시키면 안되는 어떤 값을 다룰 때 씀.
