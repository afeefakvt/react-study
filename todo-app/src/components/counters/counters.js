import React,{useState} from "react";


function Counter(){
    const [count,setCount] = useState(0)


    const increment=()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        if(count>0){
            setCount(count-1)

        }
    }

    return(
        <div>

        <button onClick={increment}>increment</button>
        <label >{count}</label>
        <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Counter