import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(1);
  const [names, setNames] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setNames(e.target.value);
  };

  // 랜더링 될때마다 실행됨.
  useEffect(() => {
    console.log("랜더링 되면 이거 뜸. (카운트만 됨)");
  }, [count]);
  // [] 안은 '디펜던트 array' 라고 함.
  // 마운트 + [item] 변경될 때만

  useEffect(() => {
    console.log("랜더링 되면 이거 뜸. (이름만 됨)");
  }, [names]);

  useEffect(() => {
    console.log("랜더링 되면 이거 뜸. (마운팅만 됨)");
  }, []);
  // 마운팅이란 React에서 컴포넌트가 DOM에 처음 삽입되어 생성되는 과정,
  // 여기서 초기 데이터 불러오기, 상태 설정 등 초기 설정 작업을 수행

  return (
    <div>
      <div>
        <button onClick={handleCountUpdate}>Update</button>
        <span>Count : {count}</span>
      </div>
      <div>
        <input type="text" value={names} onChange={handleInputChange} />
        {/* onChange는 해당 내용이 바뀔 때 마다 실행 */}
        <span>name : {names}</span>
      </div>
    </div>
  );
}

export default UseEffectHook;
