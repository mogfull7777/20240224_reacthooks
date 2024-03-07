import React, { useId } from "react";

function UseIdHook() {
  //   const id = useId();
  //   console.log(id);

  return (
    // <div>
    //   <label htmlFor="name">이름</label>
    //   <input id="name" />
    // </div> // ===> MyInput으로 이동.

    // input박스가 아닌 label의 이름을 클릭해도 input박스에 포커싱이 된다.
    // 음성으로 레이블도 읽어줄 때도 유용함. (ex. input을 클릭하면 '이름'이라고 음성으로 읽어줌.)

    <div>
      <MyInput />
      <MyInput />
      <br />
      <br />
      <InputProfile />
    </div>
    // 한 페이지에 동일한 id를 가지고 있으면 id로써의 기능을 잃어버린다.
  );
}

function MyInput() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>이름</label>
      <input id={id} />
    </div>
  );

  // 각 컴포넌트마다 알아서 고유한 id가 생성됨.
}

function InputProfile() {
  const profileId = useId();

  return (
    <div>
      <label htmlFor={`${profileId}-name`}>이름</label>
      <input id={`${profileId}-name`} />
      <br />
      <label htmlFor={`${profileId}-age`}>나이</label>
      <input id={`${profileId}-age`} />
    </div>
  );
  //  이런식으로 백틱을 활용, input뒤에 어떠한 문자를 넣어주면
  //  하나의 useId로도 여러 id를 만드는 것이 가능하다.
}

export default UseIdHook;

// useId는 고유한 Id를 만들때 사용한다. (비교적 최근에 등장한 훅이다. (React 18버전))
// useId로 만든 id는 form요소에 접근성에 관련된 속성을 제공할때 유용하다.

// < useId의 장점 >

// 1. Id의 생김새.
// - 전후로 쌍점이 붙는다. 자바스크립트에선 쌍점은 특정한 돔요소에 접근하기 위해
//   querySelector를 사용한다. querySelector(id)로 접근하면 에러가 난다.
//   에러 내용은 유효환 셀렉터가 아니라고 뜬다. 왜? 쌍점이 있기 때문에.
//   조금더 나은 코드를 작성하도록 도와줌.
//   이게 왜 장점이냐면 react는 dom요소에 접근하기 위해 이미 ref(레프)라는 기능을 이미 제공해주고 있다.
//   그렇기 때문에 react를 사용한다면 굳이 querySelector를 사용할 이유가 없다.

//   ex)
//   const ref = useRef();
//   cosnt element = ref.current; => <input id=":r0:" />

// 2. 안정성
// - const id = Math.random() => 이를 사용하면 렌더링 될때마다 (함수가 호출될때마다) 초기화가 되어 아이디가 계속 바뀜.
//   이렇게 되면 html요소의 아이디가 계속 바뀌기 때문에 '스크린리더'를 사용하는 분들이 불편함을 느낄 수 있음.
//   useId로 만든 아이디는 랜더링 되어도 아이디가 그대로 유지된다.
//   서버사이드렌더링프로젝트에서 그 안정성의 장점이 더 도드라진다.
