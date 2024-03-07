import React from "react";
import "./useContextCss.css";
import Header from "./Header";
import Content from "./Context";
import Footer from "./Footer";

function Page() {
  return (
    <div className="page">
      {/* <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} /> */}
      {/* Context 적용 후 아래처럼 변경 */}
      <Header />
      <Content />
      <Footer />
      {/* 이유는 중간 컴포넌트이기때문에 useContext가 필요 없다. */}
    </div>
  );
}

export default Page;
