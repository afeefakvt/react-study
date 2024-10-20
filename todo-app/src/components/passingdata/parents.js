import React,{useState} from "react";

import Child from "./child"


// function Parent(){
//     const [message,setMessage]  = useState("hello")

//     return(
//         <div>
//             <h1>parent componenet</h1>
//             <Child message={message}/>
//         </div>
//     )
// }




 function Parent(){
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    return(
        <div>
             <h1>parent component</h1>
<p>count:{count}</p>
             <Child increment = {increment}/>
        </div>
       
        
    )
 }
export default Parent