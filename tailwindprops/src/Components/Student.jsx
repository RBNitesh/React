function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "YES" : "NO"}</p>
    </div>
  );
}

export default Student;
