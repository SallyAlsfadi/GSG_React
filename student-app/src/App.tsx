import { useState, useEffect } from "react";
import "./App.css";
import { IStudent } from "./types";

import Student from "./components/student/student.component";
import AddForm from "./components/add-form/add-form.component";

//const COURSES_LIST: string[] = ["React", "HTML", "CSS"];
/*const INITIAL_LIST: Array<IStudent> = [
  {
    id: "2401",
    name: "Ahmad Saeed",
    age: 18,
    isGraduated: false,
    coursesList: ["Math", "English L1"],
  },
  {
    id: "2402",
    name: "Hiba Jameel",
    age: 20,
    isGraduated: false,
    coursesList: ["Web Dev", "Science", "React", "Science", "HTML"],
  },
  {
    id: "2403",
    name: "Waleed Fadi",
    age: 23,
    isGraduated: true,
    coursesList: COURSES_LIST,
  },
  {
    id: "2404",
    name: "Sarah Waheed",
    age: 19,
    isGraduated: true,
    coursesList: COURSES_LIST,
  },
  {
    id: "2405",
    name: "Mohammad Ahmad",
    age: 22,
    isGraduated: true,
    coursesList: COURSES_LIST,
  },
]; */

function App() {
  const [studentsList, setStudentsList] = useState<IStudent[]>([]);
  const [totalAbsents, setTotalAbsents] = useState(0);
  // but if we put a console log here it will run when there is any rendering
  useEffect(() => {
    console.log("Hello for App!!"); // first mount first rendering
    const storedData: IStudent[] = JSON.parse(
      localStorage.getItem("student-list") || "[]" //depedency array - to only run in the first mount , if there is no d.array it will run each time
    ); //the benefits ! call api , or load the data from the storage!, ask user to accept cookies
    setStudentsList(storedData);
    const totalAbsents = storedData.reduce((prev, cur) => {
      return prev + cur.absents;
    }, 0);
    setTotalAbsents(totalAbsents);
  }, []);

  useEffect(() => {
    storedata(studentsList);
  }, [studentsList]);

  const storedata = (newData: IStudent[]) => {
    localStorage.setItem("student-list", JSON.stringify(newData));
  };

  const removeFirst = () => {
    const newList = [...studentsList];
    newList.shift();
    setStudentsList(newList);
  };

  const handleAbsentChange = (id: string, change: number) => {
    setTotalAbsents(totalAbsents + change);

    setStudentsList(
      studentsList.map((std) =>
        std.id === id ? { ...std, absents: std.absents + change } : std
      )
    );
  };

  const handleAddStudent = (newStudent: IStudent) => {
    setStudentsList([newStudent, ...studentsList]);
  };

  const h1Style = { color: "#69247C", fontSize: "24px" };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {totalAbsents}
        </b>
      </div>
      {studentsList.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          absents={student.absents}
          age={student.age}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
    </div>
  );
}

export default App;
