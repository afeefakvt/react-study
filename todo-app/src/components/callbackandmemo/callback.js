import React, { useMemo ,useCallback, useState} from 'react'


// const Expensivecalculation = ({items=[1,2,3]})=>{
//     const total = useMemo(()=>{
//         return items.reduce((acc,curr)=> acc+curr,0)
//         },[items])
    
//       return (
//     <div>
//       total:{total}
//     </div>
//   )
// }

// export default Expensivecalculation




// import Child from './child'

// function Todo() {

//     const [count,setcount] =useState(0)
//     const [todos,setTodos] = useState([])

// const incrementCount = ()=>{
//     setcount(count+1)
// }

// const addTodo =useCallback(()=>{
//     setTodos((t)=> [...t,"new todo"])
// ,[todos]})



//   return (
//     <div>
//         <Child todos={todos} addTodo={addTodo}/>
//         <h2>count:{count}</h2>
//         <button onClick={incrementCount}>increment</button>
      
//     </div>
//   )
// }

// export default Todo


