import React, { useEffect, useState} from "react";
import api from '../api';
import MovieCard from "./MovieCard";

const MovieList = ({results, onSelect}) => {
    return (
        <div className="one-half column">
            {results.map(item => (
                <MovieCard 
                    key={item.imdbID}
                    movie={item} 
                    onSelect={onSelect}
                />
            ))}           
        </div>
    );
};

export default MovieList