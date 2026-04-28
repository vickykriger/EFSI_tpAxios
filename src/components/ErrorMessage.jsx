import React, { useState, useEffect } from 'react';
import api from '../api';

function ErrorMessage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='error'>
        <p>Error</p>
      </div>
    </>
  )
}

export default ErrorMessage