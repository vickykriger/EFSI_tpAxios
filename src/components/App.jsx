import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetail from "./MovieDetail";

function App() {
    const [results, setResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <div className="container">
            <SearchBar setResults={setResults} />

            {selectedMovie ? (
                <>
                    <button onClick={() => setSelectedMovie(null)}>
                        Volver
                    </button>
                    <MovieDetail movie={selectedMovie} />
                </>
            ) : (
                <MovieList results={results} onSelect={setSelectedMovie} />
            )}
        </div>
    );
}

export default App;