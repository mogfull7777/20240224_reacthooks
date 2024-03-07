import React from "react";
import { useNavigate } from "react-router";

function Nav() {
  const navi = useNavigate();

  const mainHandle = () => {
    navi("/");
  };

  const stateHandle = () => {
    navi("/useState");
  };
  const effectHandle = () => {
    navi("/useEffect");
  };
  const effectTimerHandle = () => {
    navi("/useEffectTimer");
  };
  const refHandle = () => {
    navi("/useRef");
  };
  const refInputHandle = () => {
    navi("/useRefInput");
  };
  const contextHandle = () => {
    navi("/useContext");
  };
  const memoHandle = () => {
    navi("/useMemo");
  };
  const memoDeepHandle = () => {
    navi("/useMemoDeep");
  };
  const callbackHandle = () => {
    navi("/useCallback");
  };
  const callbackDeepHandle = () => {
    navi("/useCallbackDeep");
  };
  const reducerHandle = () => {
    navi("/useReducer");
  };
  const reducerDeepHandle = () => {
    navi("/useReducerDeep");
  };
  const reactOptimizationHandle = () => {
    navi("/reactOptimization");
  };
  const reactOptimizationDeepHandle = () => {
    navi("/reactOptimizationDeep");
  };
  const reactOptimizationUseCallbackHandle = () => {
    navi("/reactOptimizationUseCallback");
  };
  const costomhookUseInputHandle = () => {
    navi("/customHookUseInput");
  };
  const costomhookUseFetchHandle = () => {
    navi("/customHookUseFetch");
  };
  const useIdHandle = () => {
    navi("/useId");
  };

  return (
    <div>
      <h1 onClick={mainHandle}>React Hooks Study</h1>
      <ul>
        <li>
          <h6 onClick={stateHandle}>useStateHook</h6>
        </li>
        <li>
          <h6 onClick={effectHandle}>useEffectHook</h6>
        </li>
        <li>
          <h6 onClick={effectTimerHandle}>useEffectTimer</h6>
        </li>
        <li>
          <h6 onClick={refHandle}>useRefHook</h6>
        </li>
        <li>
          <h6 onClick={refInputHandle}>useRefInput</h6>
        </li>
        <li>
          <h6 onClick={contextHandle}>useContextHook</h6>
        </li>
        <li>
          <h6 onClick={memoHandle}>useMemoHook</h6>
        </li>
        <li>
          <h6 onClick={memoDeepHandle}>useMemoDeep</h6>
        </li>
        <li>
          <h6 onClick={callbackHandle}>useCallbackHook</h6>
        </li>
        <li>
          <h6 onClick={callbackDeepHandle}>useCallbackDeep</h6>
        </li>
        <li>
          <h6 onClick={reducerHandle}>useReducerHook</h6>
        </li>
        <li>
          <h6 onClick={reducerDeepHandle}>useReducerDeep</h6>
        </li>
        <li>
          <h6 onClick={reactOptimizationHandle}>reactOptimization</h6>
        </li>
        <li>
          <h6 onClick={reactOptimizationDeepHandle}>
            reactOptimizationUseMemo
          </h6>
        </li>
        <li>
          <h6 onClick={reactOptimizationUseCallbackHandle}>
            reactOptimizationUseCallback
          </h6>
        </li>
        <li>
          <h6 onClick={costomhookUseInputHandle}>costomhookUseInput</h6>
        </li>
        <li>
          <h6 onClick={costomhookUseFetchHandle}>costomhookUseFetch</h6>
        </li>
        <li>
          <h6 onClick={useIdHandle}>useIdHook</h6>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Nav;
