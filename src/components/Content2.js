import React ,{useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Content2 = () => {
    const [Items, setItems] = useState([{id:1,item:'rice', quantity:1,checked:true},{id:2,item:'atta' , quantity:1,checked:false},{id:3,item:'suji' , quantity:1,checked:false}])

    const handleclick=()=>{

          setItems([{id:1,item:'rice', quantity:1,checked:true},{id:2,item:'atta' , quantity:1,checked:true},{id:3,item:'suji' , quantity:1,checked:true}])

    }

    const listitem=Items.map((item)=>
      
      <li className='item' key={item.id} style={{marginLeft:"100px"}}> 
      <input type="checkbox"  onClick={handleclick} checked={item.checked} style={{marginLeft:"100px"}}/>
       <label style={{marginLeft:"100px"}}>{item.item}</label> 
       <FaTrashAlt role="button" style={{marginLeft:"100px",color:'red'}}/>
       </li>
       
       
  )
  return (
    <div>
         <ul  style={{listStyle:"none "}}>
            {listitem}
         </ul>
    </div>
  )
}

export default Content2