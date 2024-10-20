// import React, { useReducer } from 'react'

import { useReducer, useState } from "react"
import reducerFunction from "./reducer"


// function countReducer(state,action){
//     if(action==='increment'){
//        return state+1
//     }else{
//         return state-1
//     }
// }

// function Counter() {


//     const [count,dispatch] = useReducer(countReducer,0)
//   return (

//     <div>
//         <h2>count:{count}</h2>
//         <button onClick={()=>dispatch('increment')}>
//             increment
//         </button>

//         <button onClick={()=>dispatch('decrement')}>
//             decrement
//         </button>
//     </div>
//   )
// }

// export default Counter




// function Counter(){

//     // const [count,setcount] = useState(0)
//     // const [color,setcolor] = useState("white")

//     const [state,dispatch] = useReducer(reducerFunction,{
//         count:0,
//         color:"white"
//     })

//     return(
//         <div>
//             <div className="usage"></div>
//             <div className="usageitem" style={{background:state.color}}>
//                 <label>count:{state.count}</label>
//                 <button onClick={()=>dispatch('increment')}>increment</button>
//                 <button onClick={()=>dispatch('decrement')}>decrement</button>

//             </div>
//             <button onClick={()=>dispatch('green')}>green</button>
//             <button onClick={()=>dispatch('blue')}>blue</button>
//         </div>
//     )
// }
// export default Counter




function Counter(){

    // const [count,setcount] = useState(0)
    // const [color,setcolor] = useState("white")

    const [state,dispatch] = useReducer(reducerFunction,{
        count:0,
        color:"white"
    })

    return(
        <div>
            <div className="usage"></div>
            <div className="usageitem" style={{background:state.color}}>
                <label>count:{state.count}</label>
                <button onClick={()=>dispatch({
                    type:'changecount',
                    payload:1
                })}>
                    increment
                    </button>
                <button onClick={()=>dispatch({
                    type:'changecount',
                    payload:-1
                })}>
                    decrement
                    </button>

            </div>
            <button onClick={()=>dispatch({
                type:"changecolor",
                payload:'green'
            })}>green</button>
            <button onClick={()=>dispatch({
                type:'changecolor',
                payload:'blue'
            })}>blue</button>
        </div>
    )
}
export default Counter