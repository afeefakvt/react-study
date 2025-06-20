//simple custom hook to manage form input elements

import { useState } from "react";

// import React, { useState } from 'react'

// function useForm(initialValues) {

//     const [values,setValues] = useState(initialValues)

//     const handleChange = (e)=>{
//         setValues({
//             ...values,
//             [e.target.name]:e.target.value
//         })
//     }

//     const resetForm  = ()=>{
//         setValues(initialValues)
//     }
//   return [values,handleChange,resetForm]
// }

// export default useForm



function useForm(initialValues){

    const [values,setValues] = useState(initialValues)

    const handleChange = (e)=>{
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]:e.target.value  
        })
    }

    const resetForm = ()=>{
        setValues(initialValues)
    }

    return [values,handleChange,resetForm]
}
export default useForm