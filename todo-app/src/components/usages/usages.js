import React,{useEffect,useState} from "react";



// function Usages(){

//     const [value,setValue] = useState(0);
//     const [color,setColor] = useState("white");

//     useEffect(()=>{
//         console.log("useeee"+value);

//         return()=>{
//             console.log("cleanuppp"+value);
            
//         }

//     },[value])

//     return(
//         <div>
//             <div className="usages" style={{background:color}}>
//             <button onClick={()=>{
//                 setValue((state)=>{
//                     return state+1
//                 })
//             }}>increment</button>
//             <label > {value}</label>
//             <button onClick={()=>{
//                 setValue((state)=>{
//                     return state-1
//                 })
//             }}>decrement</button>
//             </div>
          


//             <div>
//                 <button onClick={()=>setColor("green")}>green</button>
//                 <button onClick={()=>setColor("blue")}>blue</button>
//             </div>

//         </div>
        
//     )


// }

// function Usages(){

//     const [value,setValue] = useState(0);
//     const [color,setColor] = useState("white");
//     const [boom,setBoom] = useState(false);

//     useEffect(()=>{
//         setBoom(false)
//        const id = setTimeout(()=>{
//         setBoom(true)
//        },value*1000)

//   return (()=>{
//     clearTimeout(id)
//   })

//     },[value])

//     return(
//         <div>
//             <div className="usages" style={{background:color}}>
//             <button onClick={()=>{
//                 setValue((state)=>{
//                     return state+1
//                 })
//             }}>increment</button>
//             <label > {value}</label>
//             <button onClick={()=>{
//                 setValue((state)=>{
//                     return state-1
//                 })
//             }}>decrement</button>
//             </div>
          


//             <div>
//                 <button onClick={()=>setColor("green")}>green</button>
//                 <button onClick={()=>setColor("blue")}>blue</button>
//             </div>

//             {
//                 value&&boom?(
//                     <div>
//                         <span>
//                             boom
//                         </span>
//                     </div>
//                 ):null
//             }
//         </div>
        
//     )


// }




// function Usages(){

//     const[counter,setCounter] = useState(0)


//     useEffect(()=>{
//         const id = setTimeout(()=>{
//             setCounter(counter+1)
//         },1000)
// return()=>{
//     clearTimeout(id)

// }
//     },[counter])

//     return(
//        <h1>hi i appeared {counter} times</h1>
//     )
// }
// export default Usages