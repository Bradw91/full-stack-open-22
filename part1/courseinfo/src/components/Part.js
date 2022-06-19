const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name}: {props.part.exercises} exercises
      </p>
    </>
  );
};

export default Part;
