import React, { useState, useEffect } from 'react';
import api from '../api';

const MovieDetail = ({ movie }) => {
  const [errore, setErrore] = useState(false);
  const [resultados, setResultados] = useState(null);
  useEffect(async () => {    
      try {
        setErrore(false);
        const response = await api.get("/", {
          params: {
            apikey: "8fb39e07",
            i: movie.imdbID
          }
        });
        console.log(response.data)
        if (response.data === null) {
          setErrore(true);
          setResultados(null);
        } else {
          setResultados(response.data);
        }

      } catch (err) {
        setErrore(true);
      }    
  }, [])


  return (
    <>
      <div className="card-detalles">
        <img
          src={resultados?.Poster !== "N/A" ? resultados?.Poster : "https://via.placeholder.com/150"}
          alt={resultados?.Title}
        />
        <p>Título: {resultados?.Title}</p>
        <p>Año: {resultados?.Year}</p>
        <p>Tipo: {resultados?.Type}</p>
        <p>Género: {resultados?.Genre}</p>
        <p>Director: {resultados?.Director}</p>
        <p>Actores principales: {resultados?.Actors}</p>
        <p>Sinopsis: {resultados?.Plot}</p>
        <p>Duración: {resultados?.Runtime}</p>
        <p>Idioma: {resultados?.Language}</p>
        <p>País: {resultados?.Country}</p>
        <p>Puntaje IMDb: {resultados?.imdbRating}</p>
      </div>
    </>
  )
};

export default MovieDetail