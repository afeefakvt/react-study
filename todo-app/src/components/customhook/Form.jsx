import React from 'react'
import useForm from './Useform'

// function Form() {

//     const [formData,handleChange,resetForm] = useForm({name:'',email:''})

//     const handlesubmit = (e)=>{
//         e.preventDefault()
//         console.log(formData);
        

//     }
//   return (
//     <div>
//         <form onSubmit={handlesubmit}>
//             <label >enter name</label>
//             <input type="text" name="name"  value={formData.name} onChange={handleChange}/>
//             <br />
//             <label>enter email</label>
//             <input type="text" name="email" value={formData.email} onChange={handleChange} />
//             <br />
//             <button type='submit'>submit</button>
//             <button onClick={resetForm}>reset</button>
//         </form>
//     </div>
//   )
// }

// export default Form



const Form = () => {

  const [formData,handleChange,resetForm] = useForm({name:"",email:""})

  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(formData);
    
    

  }
  return (

    <div>

    <form onSubmit={handleSubmit}>
    <label >enter name</label>
    <input type="text" name="name"  value={formData.name} onChange={handleChange}/>
    <br />
    <label>enter email</label>
    <input type="text" name="email" value={formData.email} onChange={handleChange} />
    <br />
    <button>submit</button>
    <button onClick={resetForm}>reset</button>        

    </form>
      
    </div>
  )
}

export default Form
