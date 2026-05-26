import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/CounterSlice'

const App = () => {


  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  console.log(count);

  return (
    <div>
      <h1>counter - {count}</h1>
       <button onClick={handleIncrement}>increment</button>
       <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default App