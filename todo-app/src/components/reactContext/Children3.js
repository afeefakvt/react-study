import React, { useContext } from 'react'
import { myContext } from './Children1'

function Children3({value}) {
const users = useContext(myContext)

  return (
    <div>Children3

    </div>
    
  )
}

export default Children3