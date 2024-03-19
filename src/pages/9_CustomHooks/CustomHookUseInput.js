import React from "react";
import { useInput } from "./useInput";

function displayMessage(message) {
  alert(message);
}

function CustomHook() {
  //   const [inputValue, setInputValue] = useState("");

  //   const handleChange = (e) => {
  //     setInputValue(e.target.value);
  //   }; ---> useInput으로 복붙.

  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);
  const [inputValue2, handleChange2, handleSubmit2] = useInput(
    "123",
    displayMessage
  );
  const [inputValue3, handleChange3, handleSubmit3] = useInput(
    "456",
    displayMessage
  );

  // 긴 코드를 다시만들 필요없이 간단하게 추가 가능.

  //   const handleSubmit = () => {
  //     alert(inputValue);
  //     setInputValue("");
  //   }; ---> useInput으로 복붙

  return (
    <div>
      <h1>useInput</h1>
      <br />
      <input value={inputValue} onChange={handleChange} />
      <input value={inputValue2} onChange={handleChange2} />
      <input value={inputValue3} onChange={handleChange3} />
      <br />
      <button onClick={handleSubmit}>확인</button>
      <button onClick={handleSubmit2}>확인2</button>
      <button onClick={handleSubmit3}>확인3</button>
    </div>
  );
}

export default CustomHook;

// 말 그대로 자주사용하는 함수를 커스텀훅으로 만들어서 사용하고자 하는 컴포넌트에 적용할 수 있다.

// 이번엔 useInput, useFetch를 만듬.
