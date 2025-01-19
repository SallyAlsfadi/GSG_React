import "./App.css";
import { IStudent } from "./types";
import useLocalStorage from "./hooks/local-storage.hook";
import Main from "./screens/Main.screen";
import About from "./screens/About.screen";
import NotFound from "./screens/NotFound.screen";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

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
  const h1Style = { color: "#69247C", fontSize: "24px" };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/about">About App</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
