import React, { useReducer, useRef, useEffect } from "react";
import coursesListReducer, {
  initialCoursesListState,
} from "../../state/courses-list.reducer";

interface IProps {
  value: string[];
  onSubmit: (list: string[]) => void;
}

const CoursesListForm = (props: IProps) => {
  const [courseList, dispatch] = useReducer(
    coursesListReducer,
    initialCoursesListState
  );
  const inRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch({ type: "SET_COURSES", courses: props.value });
  }, [props.value]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCourse = event.currentTarget["courseName"].value.trim();

    if (newCourse) {
      dispatch({ type: "ADD_COURSE", course: newCourse });
      props.onSubmit([...courseList, newCourse]);
    }

    if (inRef.current) {
      inRef.current.value = "";
    }
  };

  return (
    <div className="addCourseForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cName">Enter Course: </label>
          <input ref={inRef} type="text" name="courseName" />
        </div>
        <button type="submit">Add Course</button>
      </form>
      <ul>
        {courseList.map((course, index) => (
          <li key={course + index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesListForm;
