import React, { useState } from "react";

const haveyWork = () => {
  console.log("무거운 작업");
  return ["홍길동", "김민수"];
};

function UseStateHooks() {
  const [time, setTime] = useState(1);
  // useState 괄호 안은 초기값( = time ) 이다.
  // const [names, setNames] = useState(["홍길동", "김민수"]); ===> 이 초기값은 무거움.
  const [names, setNames] = useState(() => {
    return haveyWork();
  }); // ===> 이런 식으로 콜백으로 값을 리턴해주면 가볍다.
  const [inputing, setInputing] = useState(""); // input의 값을 저장하는 state

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
    // set 함수는 초기값을 변형할때 쓰이는 함수이다.
  };

  const handleName = (e) => {
    setInputing(e.target.value);
    console.log("input의 현재 값", inputing);
  };

  const handleNameUpload = () => {
    setNames((prevState) => {
      // () 안엔 이전 상태의 스테이트를 가지게 된다. => 콜백함수
      console.log("이전 스테이트", prevState);
      return [inputing, ...prevState];
    });
  };

  return (
    <div>
      <h1>유즈스테이트 라우터 훅 입니다.</h1>
      <span>현재 시각 : {time}</span>
      <button onClick={handleClick}>Update</button>
      <p>--------------------------------------------------------------</p>
      <div>
        <input type="text" value={inputing} onChange={handleName} />
        <button onClick={handleNameUpload}>업로드</button>
        {names.map((name, index) => {
          return <p key={index}>{name}</p>;
        })}
      </div>
    </div>
  );
}

export default UseStateHooks;

// 1. 콜백함수 공부 필요.
// 2. onChange, onSubmit 다른점
