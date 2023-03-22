import React from 'react';
import Cards from './MovieCard';


function MovieList({ movies ,inputS ,searchRating }) {
  return (
      <div className="movies">
      {movies
      .filter(el=>el.title.toLowerCase().includes(inputS.toLowerCase()) && el.rating >= searchRating)
      .map(movie => (
        <Cards key={movie.id} value={movie.rating} title={movie.title} description={movie.description} image={movie.posterURL} />
      ))}
    </div>
  );
}

export default MovieList;