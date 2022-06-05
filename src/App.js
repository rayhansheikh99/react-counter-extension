import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const initialState = ()=> Number(window.localStorage.getItem("count")) || 0
  const [count, setCount] = useState(initialState)

  const increase = ()=> {
    setCount(prev => prev + 1)
  }

  const decrease = ()=> {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  }

  useEffect(()=> {
    window.localStorage.setItem("count", count)
  }, [count])

  return (
    <div className="App">
        <button onClick={decrease}>-</button>
        <button>{count}</button>
        <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
