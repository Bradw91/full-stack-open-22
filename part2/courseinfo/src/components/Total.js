const Total = ({ parts }) => {
  const total = parts.reduce(
    (prev, currentValue) => prev + currentValue.exercises,
    0
  );
  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  );
};

export default Total;
