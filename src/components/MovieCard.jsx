import React, { useState, useEffect } from 'react';
import api from '../api';

const MovieCard = ({ movie, verDetalles }) => {
  return (
    <>
      <div className="card">
        <p>img pero nose como mandarla xd</p>
        <p>Titulo: {movie.titulo}</p>
        <p>Año: {movie.anio}</p>
        <p>Tipo: {movie.tipo}</p>
        <button onClick={() => verDetalles(movie.id)}> ver detalles</button>
      </div>
    </>
  )
};

export default MovieCard