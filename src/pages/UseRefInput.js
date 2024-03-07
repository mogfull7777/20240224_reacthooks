import React, { useEffect, useRef } from "react";

function UseRefInput() {
  const inputRef = useRef();
  // 초기값을 비워두고 ref={}를 통하여 렌더링되면 지정할 html에 넣어준다.

  useEffect(() => {
    // console.log(inputRef);

    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value} 님!`);
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      {/* 이런식으로 ref={}로 접근하고자하는 요소에 접근해줄수 있게 해준다. */}
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default UseRefInput;
