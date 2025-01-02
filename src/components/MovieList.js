import React from 'react';
import MovieShow from './MovieShow';

const MovieList = ({ movies, onDelete }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieShow key={movie.imdbID} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MovieList;
