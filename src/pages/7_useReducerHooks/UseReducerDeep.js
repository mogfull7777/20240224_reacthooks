import React, { useReducer, useState } from "react";
import StudentData from "./StudentData";
import ACTION_TYPES from "./StudentAction";

const reducer = (state, action) => {
  //   console.log("변경할 것과 요구한 것", state, action);
  switch (action.type) {
    case ACTION_TYPES.add_student:
      const studentName = action.payload.student;
      const newStudent = {
        id: Date.now(),
        studentName,
        isHere: false,
      };

      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };

    case ACTION_TYPES.delete_student:
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };

    case ACTION_TYPES.mark_student:
      return {
        count: state.count,
        students: state.students.map((e) => {
          if (e.id === action.payload.id) {
            return { ...e, isHere: !e.isHere };
          }
          return e;
        }),
      };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

function UseReducerDeep() {
  const [student, setStudent] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  //   console.log("기본정보들", student, studentInfo);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요."
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.add_student, payload: { student } });
        }}
      >
        추가
      </button>
      {studentInfo.students.map((e) => {
        return (
          <StudentData
            key={e.id}
            student={e.studentName}
            dispatch={dispatch}
            id={e.id}
            isHere={e.isHere}
          />
        );
      })}
    </div>
  );
}

export default UseReducerDeep;
