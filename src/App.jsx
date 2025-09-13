import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0)
  function Sri(a,b){
    b=a+b;
    return b;
  }
  useState(() => {
    setResult(Sri(4, 5))
  },[])

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>hello</h1>
      <div className="card">
        <button onMouseEnter={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button id="hello" onClick={() => alert("Hello Vamsi!")}>
        hello vamsi
      </button>
      <p id="demo">{result}</p>
    </>
  )
}

export default App
