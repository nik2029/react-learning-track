import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import "tailwindcss";
import Card from './components/Card'

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
     <h1 className="bg-green-400 text-black p-6 rounded-4xl" >this is my counter APP:</h1>


<br></br>

<button onClick={addValue} className='bg-green-800 text-2xl rounded-3xl text-shadow-black'>increment {count}</button>
<br></br>
<button onClick={remValue} className='bg-red-600 text-2xl rounded-3xl text-black'>decrement {count}</button>
 
 <Card userName="Nikhil" age={15} Phn={123456987}/>
 <Card userName="Aditya" age={95} Phn={12346987}/>
 <Card userName="abhi" age={12} Phn={1234489987}/>
 
 
    </>
  )
}

export default App
