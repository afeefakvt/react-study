import React, { forwardRef } from 'react'

const Child = forwardRef((props,ref) => {
  return (
    <div>
      <input ref={ref} type="text" placeholder='enter here...' {...props} />
      
    </div>
  )
})

export default Child
