import { useEffect, useRef, useState } from "react";

interface IProps {
  value: string[];
  onSubmit: (list: string[]) => void;
}

const CoursesListForm = (props: IProps) => {
  const [courseList, setCoursesList] = useState<string[]>(props.value);
  const inRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCoursesList(props.value);
  }, [props.value]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCourse = event.currentTarget["courseName"].value;
    const newList = [...courseList, newCourse];
    setCoursesList(newList);
    props.onSubmit(newList);
  };
  if (inRef.current) {
    inRef.current.value = "";
  }

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
