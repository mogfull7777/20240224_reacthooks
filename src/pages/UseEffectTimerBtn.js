import React, { useState } from "react";
import UseEffectTimer from "./UseEffectTimer";

function UseEffectTimerBtn() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <UseEffectTimer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default UseEffectTimerBtn;
