import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const FeedbackSetter = ({handleClicks}) => {
  return (
    <>
    <h1>Give Feedback</h1>
    <Button onClick={handleClicks.handleGoodClick} name="Good"></Button>
    <Button onClick={handleClicks.handleNeutralClick} name="Neutral"></Button>
    <Button onClick={handleClicks.handleBadClick} name="Bad"></Button>
    </>
  )
}

const StatisticLine = ({name,value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const total = good+neutral+bad
  const average = (good*1+neutral*0.5+bad*0)/Math.max(total,1)
  const positive = good*100/Math.max(total,1)

  if (total!=0) {
    return (
      <>
      <h1>Statistics</h1>
      <table>
        <tbody>
         <StatisticLine name="good" value={good}></StatisticLine>
         <StatisticLine name="neutral" value={neutral}></StatisticLine>
         <StatisticLine name="bad" value={bad}></StatisticLine>
         <StatisticLine name="total" value={total}></StatisticLine>
         <StatisticLine name="average" value={average}></StatisticLine>
         <StatisticLine name="positive" value={positive}></StatisticLine>
        </tbody>
      </table>
      </>
    ) 
  }
  return (
    <>
    <h1>Statistics</h1>
    <p>No feedback given</p>
    </>
  ) 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClicks = {
    handleGoodClick: () => setGood(good+1),
    handleNeutralClick: () => setNeutral(neutral+1),
    handleBadClick: () => setBad(bad+1)
  }

  return (
    <div>
      <FeedbackSetter handleClicks={handleClicks}></FeedbackSetter>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App