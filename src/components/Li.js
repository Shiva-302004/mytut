import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
const Li = ({Items,handleDelete,handlecheck}) => {
    const listitem = Items.map((item) =>

    <li className='item ' key={item.id} >
      <input type="checkbox" onChange={() => handlecheck(item.id)} checked={item.checked}  />
      <label onDoubleClick={() => handlecheck(item.id)} style={(item.checked) ? { textDecoration: "line-through" } : null}>{item.item}</label>
      <FaTrashAlt role="button"  onClick={() => handleDelete(item.id)} />
    </li>)
  return (
    <div className='flex flex-row justify-center bg-slate-600 border-spacing-5 '>{listitem}</div>
  )
}

export default Li