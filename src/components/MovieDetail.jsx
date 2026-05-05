import React, { useState, useEffect } from 'react';
import api from '../api';

const MovieDetail = ({ movie, agregarAFavs }) => {
  const [errore, setErrore] = useState(false);
  const [resultados, setResultados] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setErrore(false);

        const response = await api.get("/", {
          params: {
            apikey: "8fb39e07",
            i: movie.imdbID
          }
        });

        if (!response.data) {
          setErrore(true);
          setResultados(null);
        } else {
          setResultados(response.data);
        }

      } catch (err) {
        setErrore(true);
      }
    };

    if (movie) {
      fetchMovie();
    }
  }, [movie]);

  if (!resultados && !errore) return <p>Cargando...</p>;
  if (errore) return <p>Error al cargar datos</p>;


  return (
    <>
      <div className="card-detalles">
        <div className='DetallesImg'>
          <img
            src={resultados?.Poster !== "N/A" ? resultados?.Poster : "https://via.placeholder.com/150"}
            alt={resultados?.Title}
          />
        </div>
        <div className='DetallesInfo'>
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
          <button onClick={() => agregarAFavs(movie)}>
            Agregar a favoritos
          </button>
        </div>

      </div>
    </>
  )
};

export default MovieDetail