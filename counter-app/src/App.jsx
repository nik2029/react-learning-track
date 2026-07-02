import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
    if(count<20){ 
    setCount(count+1);
    }else{
      console.log("you can not increase more than 20");
      
    }
  }
  const remValue=()=>{
    if(count>0){ 
    setCount(count-1);
  }else{
    console.log("value not be less than 0");
    
  }
}

  return (
    <>
     <h1>this is my counter APP:</h1>

<br></br>

<button onClick={addValue}>increment {count}</button>
<br></br>
<button onClick={remValue}>decrement {count}</button>
    </>
  )
}

export default App
