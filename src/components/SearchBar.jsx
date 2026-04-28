import React, { useState, useEffect } from 'react';
import api from '../api';

function SearchBar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="buscador">
                <h1>Ingrese el título de lo que quieres buscar</h1>
                <input type="text" id="searchInput" placeholder="Buscar..."/>
                <button>Buscar</button>
            </div>
        </>
    )
}

export default SearchBar