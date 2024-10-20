import React, {useEffect, useRef, useState} from "react";



// function Ref(){


//     const inputRef = useRef(null)

// const handleSubmit=(event)=>{
//     event.preventDefault()
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

//     const handleSubmit = ()=>{
//         console.log(input.current.value);
        
//     }


//     return(
//         <div>
//             <input type="text" ref={input} />
//             <button onClick={handleSubmit}>submit</button>
//         </div>

//     )
// }


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

//     const textRef = useRef(null)
//     const [color,setColor] = useState("")

//     const handleSubmit=()=>{
//       if(textRef.current){
//         textRef.current.style.color = color
//       }

//     }
//     return(
      
//         <div>
//             <h1 ref={textRef}>hello afeefa</h1>
//             <input type="text" placeholder="enter  colour..." value={color} onChange={(e)=>setColor(e.target.value)}/>
//             <button onClick={handleSubmit}>submit</button>
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