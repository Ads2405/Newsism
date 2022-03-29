import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner =() => {
 
    return (
      <div>
          <img className='my-4 ' src={loading} alt = "loading"></img>
      </div>
    )
  
}
export default Spinner;