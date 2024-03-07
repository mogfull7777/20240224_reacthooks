import React, { memo } from "react";

function ChildUseMemo({ name }) {
  console.log("👶 위에서 부터 자녀컴포넌트도 렌더링 되었네요.");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <br />
      <h3>👶 자녀</h3>
      <p>성 : {name.lastName}</p>
      <p>이름 : {name.fristName}</p>
    </div>
  );
}

export default memo(ChildUseMemo);

// memo로 인하여 렌더링 되기전에 props체크를 함.
