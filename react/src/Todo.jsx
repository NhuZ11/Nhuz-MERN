import React from 'react';
let todos = [
    {
        title: "html",
        status: true
    },
    {
        title: "css",
        status: true
    },
    {
        title: "js",
        status: false
    }] 

    
    export default function Todos(props) {
        return (
          <div className='todotask'>
             
              <p className='title'>{props.title}</p>
              <p className='status'>{props.status}</p>
          </div>
        )
      }