import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/CounterSlice'

const App = () => {


  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleIncrementByUserInput = () => {
    dispatch(incrementByAmount(12))
  }

  console.log(count);

  return (
    <div>
      <h1>counter - {count}</h1>
       <button onClick={handleIncrement}>increment</button>
       <button onClick={handleDecrement}>decrement</button>
       <button onClick={handleIncrementByUserInput}>userInput</button>
    </div>
  )
}

export default App