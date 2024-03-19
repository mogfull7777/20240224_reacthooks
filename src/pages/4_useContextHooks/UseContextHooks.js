import React, { useState } from "react";
import Page from "./useContextPages/Page";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

function UseContextHooks() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* 전달하고자 하는 props를 value에 담고 <Context 컴포넌트.Provider>를 씌워 props를 전달하고자 하는 컴포넌트를 감싸면 됨.*/}
        {/* <Page isDark={isDark} setIsDark={setIsDark} />; ---> Context 적용 후 아래처럼 변경*/}
        <Page />;
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default UseContextHooks;

// useContext
// - props처럼 하위 컴포넌트에만 데이터를 전달하는게 아니라 전역적으로 필요한 데이터를
// 각 컴포넌트에 전달할 수 있게 해주는 훅이다.
// - 그렇다면 props를 굳이 사용할 필요가 없지 않냐고 물어볼 수 있다.
// context를 사용하면 컴포넌트를 재사용하기 여려워 질 수 있다.
// - prop drilling을 피하기 위한 목적이하면 Component Composition (컴포넌트 합성)을 먼저 고려해보자.
