import {useState} from 'react'
import './App.css';

function Display({counter}){
  return(
    <div className="display">{counter}</div>
  )
}

function Button({onClick, text,className}){
  return(
      <button className={className} onClick={onClick}>
        {text}
      </button>
  )
}

function App() {
  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(counter+1)
  const decrease = () => {
    if(counter <= 0)
      return setCounter(0)
    return setCounter(counter-1)
  }
  const zeroIt = () => setCounter(0)
  
  return (
    <div className="App">
      <Display counter={counter}/>
      <div className="click-container">
        <Button className={["click", "button"].join(' ')} onClick={increase} text="Click!"/>
      </div>
        <Button className={["decrease", "button"].join(' ')} onClick={decrease} text="Decrease!"/>
        <Button className={["zero-it", "button"].join(' ')} onClick={zeroIt} text="Zero It!"/>
      
    </div>
  );
}

export default App;
