import React from 'react'

const Footer = (props) => {
    const date= new Date()
  return (
    <footer style={{display: "flex", justifyContent:"center"}} className={`bg-${props.mode==="light"?"grey":"black"} text-${props.mode==="light"?"black":"white"}`} >
        copyright &copy;  {date.getFullYear()}
    </footer>
  )
}

export default Footer