import React, { useState, useEffect } from 'react';
import api from '../api';

function Loader() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="loader">
        <p>Cargando...</p>
      </div>
    </>
  )
}

export default Loader