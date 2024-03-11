import React from 'react'

const ListItem = (props) => {
    const {id,name}=props.item
  return (
   <div>
    <p>{id}</p>
    <p>{name}</p>
   </div>
  )
}

export default ListItem