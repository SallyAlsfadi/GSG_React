import React, { useState } from "react";
import CoursesList from "../courses-list/courses-list.component";
import { IStudent } from "../../types";

interface IProps extends IStudent {
  onAbsentChange: (id: string, change: number) => void;
}
const Student = (props: IProps) => {
  const [absents, setAbsents] = useState(props.absents);

  const addAbsent = () => {
    setAbsents(absents + 1);
    props.onAbsentChange(props.id, +1);
  };
  const removeAbsent = () => {
    if (absents >= 1) {
      setAbsents(absents - 1);
      props.onAbsentChange(props.id, -1);
    }
  };

  const resetAbsent = () => {
    setAbsents(0);
    props.onAbsentChange(props.id, -absents);
  };

  return (
    <div className="std-wrapper">
      <div className="data-field">
        <b>Student :</b> {props.name.toUpperCase()}
      </div>
      <div className="data-field">
        <b>Age :</b> {props.age}
      </div>
      <div className="data-field">
        <b>Is Graduated:</b> {props.isGraduated}
      </div>
      <div className="data-field">
        <b>Courses List:</b>
        <CoursesList list={props.coursesList} />
      </div>

      <div className="absents">
        <b>Absents:</b> {absents}
        <button onClick={addAbsent}>+</button>
        <button onClick={removeAbsent}>-</button>
        <button onClick={resetAbsent}>Reset</button>
      </div>
    </div>
  );
};

export default Student;
