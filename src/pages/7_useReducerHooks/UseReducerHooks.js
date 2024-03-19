import React, { useReducer, useState } from "react";

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

// const reducer = (state, action) => {
//   console.log("reducer가 일을 합니다!", state, action);
//   switch (action.type) {
//     case "deposit":
//       return state + action.payload;
//     case "withdraw":
//       return state - action.payload;
//     default:
//       return state;
//   }
// }; // ---> 변수 ACTION_TYPES을 통해 아래처럼 축약 가능.

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다!", state, action);

  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

function useReducerHooks() {
  const [money, setMoney] = useState(0);
  const [cash, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고 : {cash}원</p>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: money });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: money });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default useReducerHooks;

// Dispatch(Action) ---> Reducer(State, Action)
//                                 |       |
//                                 |       |
//                                 |--------
//                                 |
//                                 ▼
//                            State Update!
