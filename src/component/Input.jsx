import React from 'react'
import "../style/Input.css"


const Input = ({handleChange}) => {

  
  
  return (
    <div className='input-area'>
      <h1>Pokemon Database</h1>
      <input type="search" placeholder='Search Pokemon' onChange={handleChange}/>
    </div>
  )
}

export default Input