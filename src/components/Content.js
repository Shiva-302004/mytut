import React from 'react'
import { useState } from 'react'
const Content = () => {
    // const [Name, setName] = useState("shiva")
    // const [Count, setCount] = useState(0)
    const handleNameChange=()=>{
        const names=["shiva " ,"ritik","aakash"]
        const int = Math.floor(math.random()*3)
        return names[int]
    }
    handleclick=()=>{
      
    }
  return (
    <div  style={{height: "44vh"}}>

    <p style={{display: "flex", justifyContent:"center",marginTop:"40vh"}} >hello {handleNameChange}</p>
    <div style={{display: "flex",flexDirection:"column" ,width:"20vh",marginLeft:"300px"}}>
    <button type="button" className="btn btn-primary btn-sm" onClick={handleclick1}>name1</button>
    
    </div>
    </div>
  )
}

export default Content