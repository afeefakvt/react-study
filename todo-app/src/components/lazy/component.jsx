import React, { Suspense } from 'react'


const LazyCompo = React.lazy(()=>import('./lazy'))


const Component = () => {
  return (
    <div>
        <Suspense fallback = {<div>Loading...</div>}>
            <LazyCompo/>
        </Suspense>
      
    </div>
  )
}

export default Component
