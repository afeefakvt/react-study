import React, { useCallback, useState } from 'react'

function Callbackk() {
    const [count,setcount] = useState(0)

    const increment = useCallback(()=>{
        setcount(count+1)

    },[])

  return (
    <div>  
        <h2>count:{count}</h2>
         <button onClick={increment}>+</button>
 
       
    </div>
  )
}

export default Callbackk