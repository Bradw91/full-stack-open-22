import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allStats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    average: 0,
    positive: 0
  })

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


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' onClick={handleGood}/>
      <Button text='Neutral' onClick={handleNeutral}/>
      <Button text='Bad' onClick={handleBad}/>
    </div>
  )
}

export default App