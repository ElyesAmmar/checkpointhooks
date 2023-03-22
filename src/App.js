import React, {useState} from 'react';
import './App.css';
import { moviesList } from './movieData';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import Navbar1 from './Components/Navbar';
import OpenModal from './Components/Modal2';
import FilterM from './Components/Filter';



function App() {
  const [searching,setSearching] = useState('');
  const [searchRating,setSearchRating] = useState(0);
  console.log(searchRating)

  const [movies,setMovies] = useState(moviesList);
   
  function AddMovie(movie) {
   return setMovies ([...movies,movie])
  }
   
  
  return (
    <div className="App">
     <Navbar1 setSearching={setSearching} setSearchRating={setSearchRating} />
     <MovieList searchRating={searchRating} movies={movies} inputS={searching} />
     <OpenModal add={AddMovie} />
          </div>
  );
}

export default App;
