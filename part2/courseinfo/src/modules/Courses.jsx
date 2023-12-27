const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part part={part} key={part.id}></Part>
    ))}
  </>
);

const Total = ({ parts }) => {
  const total = parts.reduce((a, part) => a + part.exercises, 0);
  return <p>Total of {total} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
};

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Course course={course} key={course.id}></Course>
      ))}
    </>
  );
};

export default Courses;
