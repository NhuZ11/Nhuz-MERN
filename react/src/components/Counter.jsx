import React,{useState} from 'react'




/* hook: function having use
    
    function useState(initalValue){
        // code ...


        return [initialValue,mutatorFunction]
    }
*/

export default function Counter() {
    // let value=101
    let[value,setValue]=useState(100)

    function increment(){
        setValue(value+1)
        console.log(value)
        
    }
    function decrement(){
        setValue(value-1)
        console.log(value);

    }
    console.log("render");
  return (
    <div className='counterChange'>
        <h1>Count:{value}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
