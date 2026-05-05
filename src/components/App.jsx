import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetail from "./MovieDetail";
import FavoritesList from "./FavoritesList";

function App() {
    const [results, setResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    let peliFav = JSON.parse(localStorage.getItem('favs'));
    if (!peliFav) {
        peliFav = [];
    }
    const [favoritas, guardarFavs] = useState(peliFav);

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favoritas));
    }, [favoritas]);

    const agregarAFavs = (movie) => {
        const existe = favoritas.some(fav => fav.imdbID === movie.imdbID);
        if (!existe) {
            guardarFavs([...favoritas, movie]);
        }
    };

    return (
        <div className="container">
            <SearchBar setResults={setResults} />
            {selectedMovie ? (
                <>
                    <button onClick={() => setSelectedMovie(null)}>
                        Volver
                    </button>
                    <MovieDetail movie={selectedMovie}
                        agregarAFavs={agregarAFavs} />
                </>
            ) : (
                <>
                    <MovieList results={results} onSelect={setSelectedMovie} />
                    <FavoritesList
                        favoritas={favoritas}
                        onSelect={setSelectedMovie} />
                </>


            )}
        </div>
    );
}

export default App;