import React, { memo } from "react";

function ChildUseCallback({ name, tellMe }) {
  console.log("👶 위에서 부터 자녀컴포넌트도 렌더링 되었네요.");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <br />
      <h3>👶 자녀</h3>
      <p>이름 : {name}</p>
      <button onClick={tellMe}>엄마 나 사랑해?</button>
    </div>
  );
}

export default memo(ChildUseCallback);

// memo로 인하여 렌더링 되기전에 props체크를 함.
