import React, { useEffect, useMemo, useState } from "react";

function UseMemoDeepening() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = isKorea ? "한국" : "외국";
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  //   {
  //     country: isKorea ? "한국" : "외국",
  //   }; // -> 이렇게 불러내면 렌더링이 되면 number을 바꿔도 useEffect가 실행, 렌더링 됨.

  // const locationOne = 'korea'
  // const locationTwo = 'korea'
  // locationOne === locationTwo > true

  // const locationOne = { country : 'korea' }
  // const locationTwo = { country : 'korea' }
  // locationOne === locationTwo > false

  // 이유는 원시타입의 테이터는 변수에 바로 할당 되지만
  // 객체타입의 데이터는 저장된 주소로 할당이 되어서 저장된 주소가 다르기에 false로 출력됨.
  // ex. const location = 'korea'
  //
  //     location
  //      ------------
  //     l   'korea'  l
  //      ------------
  //
  //      const location = { country : 'korea' }
  //
  //     location                #12345
  //      ------------            ---------------------------
  //     l   #12345   l    =>    l   { country : 'korea' }   l
  //      ------------            ---------------------------
  //

  useEffect(() => {
    console.log("useEffact 호출");
    // 뭔가 오래걸리는 작업일때만 실행 시키고 싶으면 useMemo 사용
  }, [location]); // 의존성 배열( [] 안의 값 )의 값과 비교해서 변형이 있을때만 렌더링.

  return (
    <div>
      <div>
        <h2>하루에 몇끼를 드세요?</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <br />
      <p>------------------------------------------</p>
      <br />
      <div>
        <h2>어느 나라에 있어요?</h2>
        <p>나라 : {location.country}</p>
        <button onClick={() => setIsKorea(!isKorea)}>
          비행기를 타야겠군요.
        </button>
      </div>
    </div>
  );
}

export default UseMemoDeepening;
