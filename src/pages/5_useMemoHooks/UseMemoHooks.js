import React, { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 99999999; i++) {} // 생각하는 시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("개 쉬운 계산!");
  return number + 1;
};

function UseMemoHooks() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <div>
        <h3>어려운 계산기</h3>
        <input
          type="number"
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />

        <span> + 10000 = {hardSum}</span>
      </div>
      <div>
        <h3>쉬운 계산기</h3>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />

        <span> + 1 = {easySum}</span>
      </div>
    </div>
  );
}

export default UseMemoHooks;

// Component 는 호출 될때마다 모든 내부 변수 초기화.
// UseMemo는 렌더링이 되어도 그 값을 저장해서 호출해줌.
