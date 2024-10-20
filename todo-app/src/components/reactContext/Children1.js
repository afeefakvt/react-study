import React, { createContext, useState } from 'react'
import Childdren2 from './Childdren2'


export const myContext = createContext()

function Children1() {

    const [user,setUser] = useState('afeefa')
  return (
    <myContext.Provider value={user}>
        <div>
      <h2>hello{user}</h2>
      <Childdren2/>
      
    </div>
    </myContext.Provider>
    
  )
}

export default Children1
