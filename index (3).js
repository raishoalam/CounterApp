import './index.css'
import {useState} from 'react'

const Counter = () => {
  // Define state variable 'count' with initial value of 0
  const [count, setState] = useState(0)

  return (
    <div>
      <p className="count">Counter</p>
      <p className="count1">{count}</p>
      <div className="btn">
        <button type="button" onClick={() => setState(count + 1)}>
          +
        </button>
        <button
          className="btn1"
          type="button"
          onClick={() => setState(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
