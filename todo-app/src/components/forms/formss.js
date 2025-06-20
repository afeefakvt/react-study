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
//         <input type="text" value={value} onChange={handleChange}/>
//         <button onClick={handleSubmit}>submit</button>
//       </div>
//     )
// }




// const Formss = () => {
//     const [formValues,setFormValues] = useState({
//         name:"",
//         email:""
//     })

//     const handlChange = (event)=>{
//         setFormValues({
            
//             ...formValues,
//             [event.target.name]  : event.target.value

//         }

//         )
//     }

//     const handlesubmit = ()=>{
//         console.log("form",formValues);
        
//     }
//   return (
//     <div>
//         <label>name</label>
//         <input type="text" value={formValues.name} name="name" onChange={handlChange} />
//         <label>email</label>
//         <input type="text" value={formValues.email} name="email" onChange={handlChange} />
//         <button onClick={handlesubmit}>submit</button>
      
//     </div>
//   )
// }

// export default Formss
