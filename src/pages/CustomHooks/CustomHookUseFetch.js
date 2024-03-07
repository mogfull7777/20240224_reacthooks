import React from "react";
import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function CustomHookUseFetch() {
  //   const [data, setData] = useState(null);

  //   const fetchUrl = (type) => {
  //     fetch(baseUrl + "/" + type)
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   };

  //   useEffect(() => {
  //     fetchUrl("users");
  //   }, []);
  //   ===> useFetch로 복붙.

  //   const { data, fetchUrl } = useFetch(baseUrl, "users");
  // ===> useFatch 커스텀 훅.

  const { data: userData } = useFetch(baseUrl, "users");
  // ===> userData는 fatch를 통해 값을 받아오기 전에는 null이다.
  const { data: postData } = useFetch(baseUrl, "posts");
  // ===> postData도 마찬가지로 fatch를 통해 값을 받아오기 전에는 null이다.

  return (
    <div>
      <h1>useFetch</h1>
      <br />
      {/* <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button> 
      ===> 버튼 주석처리
       */}
      {/* <pre>{JSON.stringify(userData[0], null, 2)}</pre> */}
      <h2>User</h2>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      {/* ===> userData가 있을때만 프린트 하겠다. */}
      <h2>Post</h2>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
}

export default CustomHookUseFetch;
