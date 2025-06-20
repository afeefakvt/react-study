import React, {useEffect, useRef, useState} from "react";



// function Ref(){


//const inputRef = useRef(null)
// const handleSubmit=(e)=>{
//   e.preventDefault()
//     console.log(inputRef.current.value);
    
// }

//     return(
//         <div>
//             <form>
//                 <input type="text" ref={inputRef} />
//                 <button onClick={handleSubmit}>submit</button>
//             </form>
  
//         </div>
//     )
// }
// export default Ref



// function Ref (){

//     const input = useRef("")

//     const handleSubmit = (e)=>{
//       e.preventDefault()
//       console.log(input.current.value);
        
//     }


//     return(
//         <div>
//             <input type="text" ref={input} />
//             <button onClick={handleSubmit}>submit</button>
//         </div>

//     )
// }
// export default Ref

// function Focus(){


//     const focusInput = useRef(null)
// const handleSubmit = ()=>{
//     focusInput.current.focus()
//     console.log(focusInput.current.value);
    
// }

//     return (
//         <div>
//             <input type="text" ref={focusInput} />
//             <button onClick={handleSubmit}>submit</button>
//         </div>
//     )
// }




// function ChangeColor(){

//     const textRef = useRef("")

//     const handlrchange=()=>{
//         textRef.current.style.color = "blue"

//     }
//     return(
      
//         <div>
//             <h1 ref={textRef}>hello afeefa</h1>
//             <button onClick={handlrchange}>change color</button>
//         </div>
//     )
// }

// export default ChangeColor



// function ChangeColorDynamic(){
//   const textRef = useRef('')
//   const [color,setColor] = useState("")

//   const change = ()=>{
//     textRef.current.style.color = color
//   }
    
//     return(
      
//         <div>
//             <h1 ref={textRef}>hello afeefa</h1>
//            <input type="text" placeholder="enter color..." value={color} onChange={(e)=>setColor(e.target.value)} />
//            <button onClick={change}>submit</button>
//         </div>
//     )
// }

// export default ChangeColorDynamic

// function Timer(){

//     const [count,setCounter] = useState(0)

//     const countRef = useRef(count)
//     const clearintervalref = useRef(null)

//     useEffect(()=>{
//          clearintervalref.current = setInterval(()=>{
//             countRef.current+=1
//             setCounter(countRef.current); // Update the state to trigger re-render

//             console.log('Current count:', countRef.current);
//         },1000)
//         return ()=>{
//             clearInterval(clearintervalref.current)
//         }
//     },[])
// const stopCount = ()=>{
//     clearInterval(clearintervalref.current)
// }


//     return(
//         <div>
//                     <h1>count:{count}</h1>
//                     <button onClick={stopCount}>stop  count</button>

//         </div>
//     )

// }

// export default Timer;


// function Ref() {

//     const countref = useRef(0)
//     const [renderCount,setRendercount] = useState(0)

//     const increment = ()=>{
//         countref.current+=1
//         setRendercount(renderCount+1)
//         console.log("Current Count:", countref.current); 
//     }
//   return (
//     <div>
//         <h1>{countref.current}</h1>
//         <button onClick={increment}>increment</button>


//     </div>
//   )
// }

// export default Ref

