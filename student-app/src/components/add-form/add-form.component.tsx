import { useReducer, useState } from "react";
import "./add-form.css";
import { IStudent } from "../../types";
import CoursesListForm from "../courses-list-form/courses-list-form.component";
import { validateStudent } from "../../utils/validation";
import addFormReducer, {
  initialAddFormState,
} from "../../state/add-form.reducer";

interface IProps {
  className?: string;
  onSubmit: (std: IStudent) => void;
}

const AddForm = ({ className, onSubmit }: IProps) => {
  const [state, dispatch] = useReducer(addFormReducer, initialAddFormState);
  const { student, errorsList } = state;

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (field: keyof IStudent, value: any) => {
    dispatch({ type: "UPDATE_STUDENT_FIELD", field, value });
  };

  const handleCoursesChange = (list: string[]) => {
    handleChange("coursesList", list);
  };

  const handleSubmit = () => {
    const errors = validateStudent(student);
    if (errors.length) {
      dispatch({ type: "SET_ERRORS_LIST", errors });
    } else {
      onSubmit(student);
      dispatch({ type: "RESET_FORM" });
    }
  };

  const handleClear = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className={`wrapper ${className} ${isOpen ? "open" : "closed"}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&and; Close </span> : <span>&or; Open </span>}
        Add Form
      </button>
      <div className="input">
        <label htmlFor="name">Student Name: </label>
        <input
          id="name"
          type="text"
          value={student.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="age">Student Age: </label>
        <input
          id="age"
          type="number"
          min={17}
          max={40}
          value={student.age}
          onChange={(e) => handleChange("age", e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="isGraduated">Is Student Graduated: </label>
        <input
          id="isGraduated"
          type="checkbox"
          checked={student.isGraduated}
          onChange={(e) => handleChange("isGraduated", e.target.checked)}
        />
      </div>
      <div>
        <CoursesListForm
          value={student.coursesList}
          onSubmit={handleCoursesChange}
        />
      </div>
      <div className="Actions">
        <button
          onClick={handleSubmit}
          style={{ color: errorsList.length ? "red" : "initial" }}
        >
          Submit
        </button>
        <button onClick={handleClear}>Clear</button>
      </div>
      {Boolean(errorsList.length) && (
        <div className="report">
          <h4>You have the following error/s:</h4>
          {errorsList.map((error) => (
            <p key={error}>- {error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddForm;
