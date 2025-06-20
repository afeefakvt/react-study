// import React, { useState } from 'react'
// import Child from './Child'

// const Parent = () => {
//   const [isChecked,setIsChecked] = useState(false)
//   const toggle = ()=>{
//     setIsChecked(prev=>!prev)
//   }
//   return (
//     <div>
//       <input type="checkbox" checked={isChecked} onChange={()=>setIsChecked(prev=>!prev)} />
//       <Child toggle = {toggle}/>
//     </div>
//   )
// }

// export default Parent

import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [isChecked,setIsChecked] = useState(false)
  const toggle = ()=>{
    setIsChecked(prev =>!prev)

  }
  return (
    <div>
      <button onClick={toggle}>toggle</button>
      <Child isChecked = {isChecked} onChange = {setIsChecked}/>
    </div>
  )
}

export default Parent
