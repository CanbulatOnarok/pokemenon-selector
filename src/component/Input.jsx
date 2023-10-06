import React from 'react'
import "../style/Input.css"


const Input = () => {
  
  return (
    <div className='input-area'>
      <h1>Pokemon Database</h1>
      <input type="text" placeholder='Search Pokemon'/>
    </div>
  )
}

export default Input