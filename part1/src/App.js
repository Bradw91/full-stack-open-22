import { useState } from 'react'
import Display from './components/Display';
import Button from './components/Button';
//pass in already decontructed properties (props) into functional component
//would normally be read as props.name and props.age as an object
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  );
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const increaseByOne = () => {
    setCounter(counter + 1)
  }
  const setToZero = () => {
    setCounter(0)
  }

  return (
    <div>
      {" "}
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text={'Increase'}/>
      <Button onClick={setToZero} text={'Reset'}/>
    </div>
  );
 
}

export default App;
