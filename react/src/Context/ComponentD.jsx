import React, { useContext } from 'react'
import { UserContext } from './ComponentA';

const ComponentD = ()=>{
    const userName = useContext(UserContext)
    return (
        <div className='box'>
            <h1>This is component D</h1>
            <p>Hello from component D, {userName}</p>
        </div>
    )
}

export default ComponentD;