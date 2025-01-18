export type CoursesListState = string[];

type CoursesListAction =
  | { type: "ADD_COURSE"; course: string }
  | { type: "SET_COURSES"; courses: string[] };

export const initialCoursesListState: CoursesListState = [];

const coursesListReducer = (
  state: CoursesListState,
  action: CoursesListAction
): CoursesListState => {
  switch (action.type) {
    case "ADD_COURSE":
      if (state.includes(action.course)) {
        return state;
      }
      return [...state, action.course];

    case "SET_COURSES":
      return [...action.courses];

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

export default coursesListReducer;
