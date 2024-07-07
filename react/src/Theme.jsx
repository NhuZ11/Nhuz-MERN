import React,{useState} from 'react'

export default function () {
    const [color,setColor]=useState("black")

    const blackMode=()=>{
        setColor("black")
    }

    const whiteMode=()=>{
        setColor("white")
    }

  
    return (
    <div className='themeChanger'>
        <p>current theme: {color}</p>
        <button onClick={whiteMode}>Light theme</button>
        <button onClick={blackMode}>Dark theme</button>
        <p>
            hello world
        </p>
        <p>
            hello nepal
        </p>
    </div>
  )
}
