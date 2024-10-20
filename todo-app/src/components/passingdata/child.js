import React  from "react";

// function Child ({message}){
//     return(
//         <div>
//             <h1>child compoenet</h1>
//             <p>{message}</p>
//         </div>
//     )

// }


function Child({increment}){
    return(
        <div>
            <h1>child component</h1>
            
            <button onClick={increment}>increment</button>
        </div>
    )
}
export default Child