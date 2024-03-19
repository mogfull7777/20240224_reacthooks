import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Nav from "./pages/Nav";
import UseStateHooks from "./pages/1_useStateHooks/UseStateHooks";
import Main from "./pages/Main";
import UseStateReview from "./pages/1_useStateHooks/UseStateReview";
import UseEffectHooks from "./pages/2_useEffectHooks/UseEffectHooks";
import UseEffectTimerBtn from "./pages/2_useEffectHooks/UseEffectTimerBtn";
import UseRefHooks from "./pages/3_useRefHooks/UseRefHooks";
import UseRefInput from "./pages/3_useRefHooks/UseRefInput";
import UseContextHooks from "./pages/4_useContextHooks/UseContextHooks";
import UseMemoHooks from "./pages/5_useMemoHooks/UseMemoHooks";
import UseMemoDeepening from "./pages/5_useMemoHooks/UseMemoDeepening";
import UseCallbackHooks from "./pages/6_useCallbackHooks/UseCallbackHooks";
import UseCallbackDeepening from "./pages/6_useCallbackHooks/UseCallbackDeepening";
import UseReducerHooks from "./pages/7_useReducerHooks/UseReducerHooks";
import UseReducerDeep from "./pages/7_useReducerHooks/UseReducerDeep";
import ReactOprimization from "./pages/8_ReactOprimization/ReactOprimization";
import ReactOprimizationUseMemo from "./pages/8_ReactOprimization/ReactOprimizationUseMemo";
import ReactOprimizationUseCallback from "./pages/8_ReactOprimization/ReactOprimizationUseCallback";
import CustomHookUseInput from "./pages/9_CustomHooks/CustomHookUseInput";
import CustomHookUseFetch from "./pages/9_CustomHooks/CustomHookUseFetch";
import UseIdHook from "./pages/10_useIdHooks/UseIdHook";

const LayOut = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Main />} />
          <Route path="/useState" element={<UseStateHooks />} />
          <Route path="/useStateReview" element={<UseStateReview />} />
          <Route path="/useEffect" element={<UseEffectHooks />} />
          <Route path="/useEffectTimer" element={<UseEffectTimerBtn />} />
          <Route path="/useRef" element={<UseRefHooks />} />
          <Route path="/useRefInput" element={<UseRefInput />} />
          <Route path="/useContext" element={<UseContextHooks />} />
          <Route path="/useMemo" element={<UseMemoHooks />} />
          <Route path="/useMemoDeep" element={<UseMemoDeepening />} />
          <Route path="/useCallback" element={<UseCallbackHooks />} />
          <Route path="/useCallbackDeep" element={<UseCallbackDeepening />} />
          <Route path="/useReducer" eleme nt={<UseReducerHooks />} />
          <Route path="/useReducerDeep" element={<UseReducerDeep />} />
          <Route path="/reactOptimization" element={<ReactOprimization />} />
          <Route
            path="/reactOptimizationUseMemo"
            element={<ReactOprimizationUseMemo />}
          />
          <Route
            path="/reactOptimizationUseCallback"
            element={<ReactOprimizationUseCallback />}
          />
          <Route path="/customHookUseInput" element={<CustomHookUseInput />} />
          <Route path="/customHookUseFetch" element={<CustomHookUseFetch />} />
          <Route path="/useId" element={<UseIdHook />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
