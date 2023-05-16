import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Effects = () => {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log("Side Effects")
    })

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter+1)}>+</button>
        
    </div>
  )
}

export default Effects