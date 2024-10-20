// import React from 'react'



// function Child({todos,addtodo}) {

    
//   return (
//     <div>
//     <h2>my todod</h2>
//     {todos.map((todo,index)=>{
//         return <p key={index}>{todo}</p>
//     })}   
    
//     <button onClick={addtodo}>addtodo</button>
//     </div>
//   )
// }

// export default Child


import React from 'react'

const Child = React.memo(({value})=> {
  return (
    <div>
{value}
    </div>
  )
})

export default Child