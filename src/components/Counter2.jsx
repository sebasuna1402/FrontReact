import { useContext } from "react";
import CounterContext from "../main";

const Counter2 = (props) => {

  const counterFromContext = useContext(CounterContext);

  const {number, aumentar} = props;

  return (
    <>
      <div>Counter2 - {counterFromContext}</div>
      <button onClick={aumentar}>Counter 2 +</button>
    </>
  )
}

export default Counter2