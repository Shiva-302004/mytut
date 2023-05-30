import React from 'react'
import Li from './Li'


const ListItem = ({Items,handleDelete,handlecheck}) => {
    

    return (
    <div>
        <ul style={{ listStyle: "none " }}>
        <Li handleDelete={handleDelete} handlecheck={handlecheck} Items={Items}></Li>
      </ul>
    </div>
  )
}

export default ListItem