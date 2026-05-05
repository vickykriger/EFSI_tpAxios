import React from "react";
import MovieCard from "./MovieCard";

const FavoritesList = ({ favoritas, onSelect }) => {
  if (!favoritas || favoritas.length === 0) {
    return <p>No tenés películas favoritas aún.</p>;
  }

  return (
    <div>
      <h2>Tus favoritas</h2>

      <div className="one-half column">
        {favoritas.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;