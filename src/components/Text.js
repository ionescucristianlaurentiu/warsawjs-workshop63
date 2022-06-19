import { useState } from "react"
const Text = ({text= '123', defaultParameter = 0}) => {
   const [counter, setCounter] = useState(defaultParameter);
   const onChange = (incremeant)=> {
      setCounter(counter+ incremeant)
   }
   
   return (
   <div>
      <p>{text}</p>
      <h4>{counter}</h4>
      <button onClick={() => onChange(1)} > increment value </button>
      <button onClick={() =>onChange(-1)} > decrement value </button>
      <button onClick={() => onChange(-5)} > decrement value </button>
      
   </div>
 )
}

export default Text