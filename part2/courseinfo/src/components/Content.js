import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {/* <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/> */}
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
