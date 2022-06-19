import { useState } from 'react'
import Display from './components/Display';
import Button from './components/Button';
import History from './components/History';
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
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('I love you'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('Poop'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <History allClicks={allClicks}/>
      <Button onClick={() =>{
        setLeft(0)
        setRight(0)
        setAll([])
      }} text='Reset'/>
    </div>
  )
}

export default App;
