import React from 'react'
import { useState } from 'react'
const Content = () => {
    const [Name, setName] = useState("shiva")
    // const [Count, setCount] = useState(0)
    
    const handleclick1=()=>{
        const names = ['shiva ', 'ritik', 'aditya', 'aakash','keshav'];
        
        setName(names[(0)])
    }
    const handleclick2=()=>{
        const names = ['shiva ', 'ritik', 'aditya', 'aakash','keshav'];
        
        setName(names[(1)]);
    }
    const handleclick3=()=>{
        const names = ['shiva ', 'ritik', 'aditya', 'aakash','keshav'];
        
        setName(names[2])
    }
    const handleclick4=()=>{
        const names = ['shiva ', 'ritik', 'aditya', 'aakash','keshav'];
        
        setName(names[3])
    }
    const handleclick5=()=>{
        const names = ['shiva ', 'ritik', 'aditya', 'aakash','keshav'];
        
        setName(names[(4)])
    }
    const handleNameChange = (e) => {
        
        const names = ['shiva ', 'ritik', 'aditya', 'aakash','keshav'];
        
        setName(e.target.value)
    }
  return (
    <div  style={{height: "44vh"}}>

    <p style={{display: "flex", justifyContent:"center",marginTop:"40vh"}} onChange={handleNameChange}>hello {Name}</p>
    <div style={{display: "flex",flexDirection:"column" ,width:"20vh",marginLeft:"300px"}}>
    <button type="button" className="btn btn-primary btn-sm" onClick={handleclick1}>name1</button>
    <button type="button" className="btn btn-primary btn-sm" onClick={handleclick2}>Name2</button>
    <button type="button" className="btn btn-primary btn-sm"onClick={handleclick3}>Name3</button>
    <button type="button" className="btn btn-primary btn-sm"onClick={handleclick4}>Name4</button>
    <button type="button" className="btn btn-primary btn-sm"onClick={handleclick5}>Name5</button>
    </div>
    </div>
  )
}

export default Content