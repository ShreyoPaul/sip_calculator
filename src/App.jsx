import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import SIPcard from './Components/SIPcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="header">
      <h1>SIP Calculator</h1>
      <div className="desc">
      A SIP calculator is a useful tool for investors to plan and manage their investments in a systematic way, by calculating the total accumulated amount, based on the amount invested, frequency and expected rate of return. It helps to determine the optimal investment amount and frequency to reach financial goals, compare investment options and track progress over time. It makes the process of investing simple and helps to make informed decisions.
      </div>
    </div>
    <SIPcard/>
    {/* <Input/> */}
    </>
  )
}

export default App
