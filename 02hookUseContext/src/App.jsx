import { createContext, useState } from 'react'
import './App.css'
import ChildA from './component/ChildA';
import Form from './component/Form';
import 'tailwindcss'


  const nameCon = createContext();
  const ageCon=createContext();
  const emailCon=createContext();
  const genderCon=createContext();

function App() {
  //const [count, setCount] = useState(0)

  const name = "Nikhil";
  const age=22;
  const email="Abhi@gmail.com";
  const gender="Male";

  return (
 <>
 <nameCon.Provider value={name}>
  <ageCon.Provider value={age}>
    <emailCon.Provider  value={email}>
      <genderCon.Provider value={gender}>

        <ChildA/>


      </genderCon.Provider>

    </emailCon.Provider>
  </ageCon.Provider>
 </nameCon.Provider>

 <Form/>
 </>
  )
}

export default App
export {nameCon,ageCon,emailCon,genderCon}
