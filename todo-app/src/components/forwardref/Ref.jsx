import React, { useRef } from 'react'
import Child from './Child'

function Ref() {
    const inputref = useRef(null)
    const focus = ()=>{
      if(inputref.current){
        inputref.current.focus()
        console.log(inputref.current.value);
        
      }
    }
  return (
    <div>
      <Child ref={inputref}/>
      <button onClick={focus}>focus input</button>
    </div>
  )
}

export default Ref