import React, { useState } from 'react';
import api from '../api';
import ErrorMessage from './ErrorMessage';

function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const buscar = async () => {
    try {
      setError(false);
      const response = await api.get("/", {
        params: {
          apikey: "8fb39e07",
          s: query
        }
      });

      if (response.data.Response === "False") {
        setError(true);
        setResults([]);
      } else {
        setResults(response.data.Search);
      }

    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="buscador">
      <h1>Ingrese el título de lo que quieres buscar</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        buscar();
      }}>
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      {error && <ErrorMessage />}
    </div>
  );
}

export default SearchBar;