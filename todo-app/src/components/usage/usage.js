import React,{useState} from "react";
import "./usage.css"


function Usage(){

    const[value,setValue] = useState(0)
    const [color,setColor] = useState("white")
    


    return(
       <div className="usage">
        <div className="usage-container" style={{background:color}}>
        <button onClick={()=>setValue(value+1)}>increment</button>
        <label> {value} </label>
        <button onClick={()=>setValue(value-1)}>decrement</button>
        </div>


            <button onClick={()=>setColor("yellow")}>yellow</button>
        
            <button onClick={()=>setColor("blue")}>blue</button>
    
       </div>

    )
}

export default Usage;