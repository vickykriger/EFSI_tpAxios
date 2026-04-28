import React, { useState, useEffect } from 'react';
import api from '../api';

function ErrorMessage() {

  return (
    <>
    <div className='error'>
      <p>Error, no se encontro lo que buscabas.</p>
    </div>
    </>
  )
}

export default ErrorMessage