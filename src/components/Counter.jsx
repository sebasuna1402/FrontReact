import { useEffect, useState } from 'react';
import Counter2 from './Counter2'

const Counter = (props) => {
 
 const [counter, setCounter] = useState(0)

 useEffect(() => {
  console.log("useEffect solo al cargar");
}, [])

 useEffect(() => {
   console.log("useEffect solo cuando el counter cambia");
   if(counter === 0){
    console.log("Counter es 0"); 
   }
 }, [counter])

 useEffect(() => {
  console.log("useEffect Destroy");

  return ()=>{
    console.log("Destroy");
  };
}, [])

 
  
  
  const aumentar = () => {
    setCounter((currentCounter) => currentCounter  + 1);
  };

  const restar = () => {
    setCounter((currentCounter) => currentCounter  - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
        <button onClick={restar}>-</button>
        <div>{counter}</div>        
        <button onClick={aumentar}>+</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter