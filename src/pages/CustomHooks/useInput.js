import { useState } from "react";

export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue); // 매개변수를 초기값으로 설정

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}

// 커스텀훅이라고 해도 앞에 use를 붙이는 것이 좋다.
// 왜? 이상한 실수를 할 때마다 react에서 콘솔에 적절한 경고메세지를 띄워줄 수 있다.
