import React, { useState, useEffect } from 'react';
import api from '../api';

const MovieCard = ({ movie, onSelect }) => {
  return (
    <>
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} />
        <p>Titulo: {movie.Title}</p>
        <p>Año: {movie.Year}</p>
        <p>Tipo: {movie.Type}</p>
        <button onClick={() => onSelect(movie)}>
          Ver detalle
        </button>
      </div>
    </>
  )
};

export default MovieCard