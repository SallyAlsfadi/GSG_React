import { IStudent } from "../types";

export interface AddFormState {
  student: IStudent;
  errorsList: string[];
}

type Action =
  | { type: "UPDATE_STUDENT_FIELD"; field: keyof IStudent; value: any }
  | { type: "SET_ERRORS_LIST"; errors: string[] }
  | { type: "RESET_FORM" };

export const initialAddFormState: AddFormState = {
  student: {
    id: "",
    name: "",
    absents: 0,
    age: 0,
    isGraduated: false,
    coursesList: [],
  },
  errorsList: [],
};

const addFormReducer = (state: AddFormState, action: Action): AddFormState => {
  switch (action.type) {
    case "UPDATE_STUDENT_FIELD":
      return {
        ...state,
        student: { ...state.student, [action.field]: action.value },
      };
    case "SET_ERRORS_LIST":
      return {
        ...state,
        errorsList: action.errors,
      };
    case "RESET_FORM":
      return initialAddFormState;
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

export default addFormReducer;
