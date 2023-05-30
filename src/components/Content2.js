// import React, { useState } from 'react'

import ListItem from './ListItem'

const Content2 = ({Items,handleDelete,handlecheck}) => {
  

 

  
  return (
    <div>
      {Items.length?(
      <ListItem handleDelete={handleDelete} handlecheck={handlecheck} Items={Items}></ListItem>
      ):(
        <p>No item selected</p>
      )}
    </div>
  )
}

export default Content2