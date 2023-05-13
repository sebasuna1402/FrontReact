import { useContext, useEffect, useState } from 'react';
import CounterContext from '../main';

const Counter = (props) => {

 const counterFromContext = useContext(CounterContext);

 console.log(counterFromContext);

 const [counter, setCounter] = useState(0)

 let array = [1,2,3,4];
 let newArray = [...array,5];

 let objeto = {id:1,name:"Test"};
 let nuevoObjeto = {...objeto,lastName:"TestLastName"};

 console.log(nuevoObjeto);

 console.log(newArray);

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
        <div>{counterFromContext}</div>  
        <button onClick={aumentar}>+</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter