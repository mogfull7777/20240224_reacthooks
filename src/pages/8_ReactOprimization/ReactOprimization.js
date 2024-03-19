import React, { useState } from "react";
import Child from "./Child";

function ReactOprimization() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0); // eslint-disable-next-line

  const incrememntParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrememntChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("👨‍👩‍👦 위에서 부터 부모컴포넌트가 렌더링 되었습니다.");

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>👨‍👩‍👦부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrememntParentAge}>부모 나이 증가</button>
      <button onClick={incrememntChildAge}>자녀 나이 증가</button>
      <Child name={"홍길동"} age={childAge} />
    </div>
  );
}

export default ReactOprimization;

// 리액트에서 제공해주는 고차컴포넌드인 React.memo 활용. <useMemo와 useCallback을 활용하여 최적화>
// 부모컴포넌트가 렌더링 되면 모든 자식컴포넌트 또한 렌더링됨.
// 부모컴포넌트가 모종의 이유로 계속 렌더링이 된다하면 자식컴포넌트 또한 같은 데이터를 가지고 있음에도
// 불구하고 함께 렌더링이 됨.
// 이렇게 되면 프로젝트의 성능은 똥이 된다.

// 그렇다면 자식컴포넌트의 props가 변경될 때만 렌더링 할순 없을까??
// ---> 이를 위한게 React.memo

// React.memo는 꼭 필요할때만 사용!
// 1) 컴포넌트가 같은 Props로 자주 렌더링 될 때
// 2) 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야한다면
// 3) Memo를 적절하게 사용한다면 최적화에 이득을 사용할 수 있지만
//    무분별하게 사용한다면 오히려 성능에 안좋은.
//    ---> 컴포넌트를 메모라이징 해서 재사용 하기위해선 메모리를 추가적으로 소비하기 때문.
// 4) React.memo는 오직 props 체크를 통해서만 렌더링이 될지 안될지를 판단함.
// 5) 만약에 컴포넌트가 useState, useReducer, useContext와 같은 상태와 관련된 훅을 사용한다면
//    props의 변화가 없더라도 여전히 state나 Context가 변경될때마다 다시 렌더링됨.
