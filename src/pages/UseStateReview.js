import React, { useState } from "react";

function UseStateReview() {
  const [times, setTimes] = useState(1);

  const [inputname, setInputName] = useState("");
  const [names, setNames] = useState(["임주희", "안성원"]);

  const timeHandle = () => {
    let newTime;
    if (times >= 12) {
      newTime = 1;
    } else {
      newTime = times + 1;
    }
    setTimes(newTime);
  };

  const nameUpdate = (e) => {
    setInputName(e.target.value);
    console.log("이름 업데이트 되고 있나요??", inputname);
  };

  const nameHandler = () => {
    setNames((prevArray) => {
      return [inputname, ...prevArray];
    });
  };

  return (
    <div>
      <p>현재 시간 :{times}</p>
      <button onClick={timeHandle}>시간 추가</button>
      <p>--------------------------------------</p>
      <input type="text" value={inputname} onChange={nameUpdate} />
      <button onClick={nameHandler}>이름 업로드</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
        // 아 리턴을 시켜줘야 하는구나. => 왜? {}는 자바스크립트이기 때문 출력해주는 메소드인 return이 꼭 필요함.
      })}
    </div>
  );
}

export default UseStateReview;
