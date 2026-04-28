import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SearchBar from './components/SearchBar.jsx'
import Loader from './components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchBar />
    <Loader />
  </StrictMode>,
)
