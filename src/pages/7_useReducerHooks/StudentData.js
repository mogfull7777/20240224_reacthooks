import React from "react";
import ACTION_TYPES from "./StudentAction";

function StudentData({ student, dispatch, id, isHere }) {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "#dee2e6" : "black",
          fontWeight: isHere ? "bolder" : "normal",
        }}
        onClick={() => {
          dispatch({ type: ACTION_TYPES.mark_student, payload: { id } });
        }}
      >
        {student}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.delete_student, payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default StudentData;
