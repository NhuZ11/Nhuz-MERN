import React from 'react'
import ComponentC from './ComponentC';

const ComponentB = ()=>{
    return (
        <div className='box'>
            <h1>This is component B</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB;