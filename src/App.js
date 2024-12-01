import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';


const App = () =>{

  const [query,setQuery]=useState("");
  const [movies,setMovies]=useState([]);
  

  useEffect( () =>{
    const fetchData=  async ()=>{
      const api_key='43074828169f778e78b380ceae0f014d';
      const URL= query ? 
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`:
      `https://api.themoviedb.org/3/movie/popular?api_key=43074828169f778e78b380ceae0f014d`;
      const result = await fetch(URL);
      result.json().then(json=>{
        setMovies(json.results);
      })
    } 
    fetchData();
  },[query])

  

    return(
        <div className="app">
          <h1>Moviempire</h1>
          <SearchBar query={query} onChangeQuery={setQuery}  />
          <MoviesList movies={movies}/>
        </div>
    );
}

export default App;