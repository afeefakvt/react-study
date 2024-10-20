import React from "react";


function Datalist(){
    const data = [
        {
            id:1,
            name:"afeefa"
        },
        {
            id:2,
            name:"razik"
        }
    ]

    return(
        <div>
            <h1>datalist</h1>
          <ul>
            {data.map((item)=>{
                return (
                <li key={item.id}>
                     {item.id}:{item.name}
                </li>
            )
            })}
          </ul>
        </div>

    )
}
export default Datalist