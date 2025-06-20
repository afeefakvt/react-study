import React from 'react'
import useFetch from './useFetch'

const Api = () => {
    const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/posts')
    if (loading) return <p>Loading...</p>
    if(error) return <p>Error:{error}</p>
  return (
    <div>
        <h2>Posts:</h2>
            <ul>
                {data.map((post)=>{
                    <li key={post.id}> <strong>{post.title}</strong></li>
                })}
            </ul>
    </div>
  )
}

export default Api
