import React, { createContext, useState } from 'react'
import Child2 from './Child2'

export const myContext = createContext()



function Child1() {


    const [user, setuser] = useState("afeefa")
   
    return (
        <myContext.Provider value={user}>
            <div>
                <h3> hello{user}</h3>
                <Child2 />
            </div>
        </myContext.Provider>

    )
}

export default Child1