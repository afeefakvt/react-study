// import React from 'react'

// const Child = ({toggle}) => {
//   return (
//     <div>
//       <button onClick={toggle}>toggle</button>
      
//     </div>
//   )
// }

// export default Child


import React from 'react'

const Child = ({isChecked,onChange}) => {
  return (
    <div>
      <input type="checkbox" checked = {isChecked} onChange={(e)=>onChange(e.target.checked)} />   
    </div>
  )
}

export default Child
