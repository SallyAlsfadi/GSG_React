import { useState } from "react";
import { IStudent } from "../types";
import { validateStudent } from "../utils/validation";

const INITIAL_STUDENT = {
  age: 0,
  coursesList: [],
  id: "",
  isGraduated: false,
  name: "",
  absents: 0,
};

const useAddForm = (onSubmit: (student: IStudent) => void) => {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
  const [isOpen, setIsOpen] = useState(false);
  const [errorsList, setErrorsList] = useState<string[]>([]);
  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });
  };
  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
    setErrorsList([]);
  };

  const handleSubmit = () => {
    const newStudent: IStudent = { ...student, id: Date.now().toString() };

    const errors = validateStudent(newStudent);
    if (errors.length > 0) {
      setErrorsList(errors);
    } else {
      setErrorsList([]);
      onSubmit(newStudent);
      handleClear();
    }
  };
  return {
    student,
    errorsList,
    handleChange,
    handleSubmit,
    handleClear,
  };
};

export default useAddForm;
