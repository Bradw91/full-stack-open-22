const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        App is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

export default History