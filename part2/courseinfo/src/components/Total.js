const Total = ({ parts }) => {
  const total = parts.reduce(
    (prev, currentValue) => prev + currentValue.exercises,
    0
  );
  return (
    <>
      <p><strong>Total number of exercises: {total}</strong></p>
    </>
  );
};

export default Total;
