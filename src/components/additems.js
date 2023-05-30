import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({item,setitem,handleclick}) => {
  return (

    <form action=".php" className='container' style={{marginLeft:"150px"}}>
         <label htmlFor='addItem' style={{fontFamily:"cursive",color:"GrayText"}}>Add item</label>
         <input required id="additem " value={setitem} onChange={(e)=>setitem(e.target.value)} type="text" placeholder='add item' style={{width:"150px",height:"30px",marginLeft:"7px"}}/>
        <button type="submit" aria-label='add item'onClick={handleclick}><FaPlus/></button>
    </form>
    
  )
}

export default AddItems