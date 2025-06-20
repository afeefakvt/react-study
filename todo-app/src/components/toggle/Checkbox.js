import React, { useState } from 'react'

const Checkbox = () => {
    const [isChecked,setIsChecked] = useState(false)
    const toggle = ()=>{
        setIsChecked(prev => !prev)
    }
  return (
    <div>
        <input type="checkbox"  checked = {isChecked} onChange={()=>setIsChecked(prev =>!prev)}/>
        <button onClick={toggle}>toggle cheboc</button>
      
    </div>
  )
}

export default Checkbox
