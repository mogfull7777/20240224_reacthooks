import React, { useEffect } from "react";

function UseEffectTimer(props) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <h2>타이머를 시작합니다.</h2>
    </div>
  );
}

export default UseEffectTimer;
