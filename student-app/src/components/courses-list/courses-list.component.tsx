interface IProps {
  list: string[];
}

const CoursesList = (props: IProps) => {
  return (
    <ul className="courses-lists">
      {props.list.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </ul>
  );
};

export default CoursesList;
