
import './App.css'
import Counter from './components/Counter'
import CurrencyConverter from './components/CurrencyConverter'
import PasswordGenerator from './components/PasswordGenerator'
import TimerUsingHooks from './components/timerUsinghooks'
import Card from './components/Card'

function App() {

  
  return (
  <>
  <Counter/>
<TimerUsingHooks/>
<PasswordGenerator/>

<CurrencyConverter/>
<Card 
imgUrl="https://images.pexels.com/photos/36967061/pexels-photo-36967061.jpeg"
userName="NIkhil"
age={22}
Phn={7800468307}/>  

<Card 
imgUrl="https://images.pexels.com/photos/6259470/pexels-photo-6259470.jpeg"
userName="Aditya"
age={24}
Phn={99191585525}
/>
  </>

 
    
  )
}

export default App
