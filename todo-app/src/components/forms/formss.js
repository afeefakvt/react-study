import React ,{useState} from "react";


// function Formss(){
//     const [value,setValue] = useState("")


//     const handleChange=(event)=>{
//     setValue(event.target.value)

//     }
// const handleSubmit=()=>{
//     console.log(value);
    
// }
//     return(
//         <div>
//             <label>enter name:</label>
//         <input type="text"  value={value} onChange={handleChange}/>
//         <button onClick={handleSubmit}>submit</button>
//       </div>
//     )
// }




function Formss(){
    const [formValues,setFormValues] = useState({
        name:"",
        email:""

    })


    const handleChange=(event)=>{
    const {name,value} =event.target
    setFormValues({
        ...formValues,
        [name]:value
    }) 
    }
const handleSubmit=()=>{
    console.log(formValues);
    
}
    return(
        <div>
            <label>enter name:</label>
        <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
        <br />
        <label>enter email:</label>
        <input type="text" name="email" value={formValues.email} onChange={handleChange}/>

        <button onClick={handleSubmit}>submit</button>
      </div>
    )
}
export default Formss