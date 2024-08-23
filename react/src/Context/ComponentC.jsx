import React from 'react'
import ComponentD from './ComponentD';

const ComponentC = ()=>{
    return (
        <div className='box'>
            <h1>This is component C</h1>
            <ComponentD />
        </div>
    )
}

export default ComponentC;