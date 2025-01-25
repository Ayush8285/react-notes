import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    
    // counter = counter +1 
    setCounter(counter + 1)
    // console.log("value added", counter)let [counter, setCounter] = useState(15)

const addValue = () => {
  setCounter(counter + 1)
}

const removeValue = () => {
  setCounter(counter - 1)
}

const handleCounterChange = (value) => {
  setCounter(counter + value)
}

return (
  <>
    <h1>Counter App</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={() => handleCounterChange(1)}>Add value</button>
    <button onClick={() => handleCounterChange(-1)}>Remove value</button>
  </>
)
  }

  const removeValue = () => {
    setCounter(counter -1)
  }

  return (
    <>
        <h1>hy</h1>
        <h2>counter value: {counter} </h2>
        <button onClick={addValue}>add value {counter}</button>
        <br />
        <button onClick={removeValue}>remove value {counter} </button>
    </>
  )
}

export default App
