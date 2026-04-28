import React, { useState, useEffect } from 'react';
import api from '../api';

const MovieDetail = ({ movie }) => {
  return (
    <>
      <div className="card-detalles">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
          alt={movie.Title}
        />
        <p>Título: {movie.Title}</p>
        <p>Año: {movie.Year}</p>
        <p>Tipo: {movie.Type}</p>
        <p>Género: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Actores principales: {movie.Actors}</p>
        <p>Sinopsis: {movie.Plot}</p>
        <p>Duración: {movie.Runtime}</p>
        <p>Idioma: {movie.Language}</p>
        <p>País: {movie.Country}</p>
        <p>Puntaje IMDb: {movie.imdbRating}</p>
      </div>
    </>
  )
};

export default MovieDetail