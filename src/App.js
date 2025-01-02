import React, { useState } from 'react';
import searchMovies from './api';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);  // Initialize as empty array

  const onSubmit = async (term) => {
    const result = await searchMovies(term);
    console.log(result); // Check the data structure

    if (result) {
      setMovies((prevMovies) => {
        if (Array.isArray(prevMovies)) {
          return [...prevMovies, result];
        } else {
          // If prevMovies isn't an array, reset it to an empty array and append
          return [result];
        }
      });
    } else {
      console.error("No movie found");
    }
  };

  const deleteMovie = (imdbID) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </div>
  );
}

export default App;
