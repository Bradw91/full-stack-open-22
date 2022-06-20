import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    console.log(good)
  }

  const handleBad = () => {
    setBad(bad+1)
    console.log(bad)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    console.log(neutral)
  }

  const all = good + neutral + bad;

  const average = ((good - bad) / all).toFixed(3);

  const percentPositive = (all, good) => {
    let result = Math.round((good / all) * 100,2);
    if (isNaN(result)){
      return ""
    }
    return result + "%"
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' onClick={handleGood}/>
      <Button text='Neutral' onClick={handleNeutral}/>
      <Button text='Bad' onClick={handleBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={percentPositive(all, good)}/>
    </div>
  )
}

export default App