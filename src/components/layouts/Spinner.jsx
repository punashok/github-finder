import React from 'react'
import laoding from "./assets/spinner.gif"

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img src={ laoding } alt="Loading..." className='text-center mx-auto' width={180} />
    </div>
  )
}

export default Spinner