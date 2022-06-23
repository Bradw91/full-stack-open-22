const Part = ({ part }) => {
  return (
    <>
      <p>
        <strong>{part.name}</strong>: {part.exercises} exercises
      </p>
    </>
  );
};

export default Part;
