import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Go, Kammy, Go!</h1>
      <div className="card">
        <p>
          Konnichiwa!
        </p>
      </div>
    </>
  )
}

export default App
