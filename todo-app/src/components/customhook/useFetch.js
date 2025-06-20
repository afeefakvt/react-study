import { useState,useEffect } from "react";

const useFetch = (url)=>{
    const [data,setData] = useState("")
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                setLoading(true)
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error("failed to fetch")
                }
                const result = await response.json()
                setData(result)
                setError(null)
            } catch (error) {
                setError(error.message)
                setData(null)
                
            }finally{
                setLoading(false)
            }
        }
    },[url]);

    return {data,loading,error}
}

export default useFetch