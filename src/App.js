import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Nav from "./pages/Nav";
import UseStateHooks from "./pages/UseStateHooks";
import Main from "./pages/Main";
import UseStateReview from "./pages/UseStateReview";
import UseEffectHooks from "./pages/UseEffectHooks";
import UseEffectTimerBtn from "./pages/UseEffectTimerBtn";
import UseRefHooks from "./pages/UseRefHooks";
import UseRefInput from "./pages/UseRefInput";
import UseContextHooks from "./pages/UseContextHooks";
import UseMemoHooks from "./pages/UseMemoHooks";
import UseMemoDeepening from "./pages/UseMemoDeepening";
import UseCallbackHooks from "./pages/UseCallbackHooks";
import UseCallbackDeepening from "./pages/UseCallbackDeepening";
import UseReducerHooks from "./pages/UseReducerHooks";
import UseReducerDeep from "./pages/UseReducerDeep";
import ReactOprimization from "./pages/ReactOprimization/ReactOprimization";
import ReactOprimizationUseMemo from "./pages/ReactOprimization/ReactOprimizationUseMemo";
import ReactOprimizationUseCallback from "./pages/ReactOprimization/ReactOprimizationUseCallback";
import CustomHookUseInput from "./pages/CustomHooks/CustomHookUseInput";
import CustomHookUseFetch from "./pages/CustomHooks/CustomHookUseFetch";
import UseIdHook from "./pages/useIdHooks/UseIdHook";

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
