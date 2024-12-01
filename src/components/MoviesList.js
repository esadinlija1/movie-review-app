import "./componentsStyles/MoviesList.css";
import React from "react";
import MovieCard from "./MovieCard";

export default function MoviesList(props){


  return (
    <div className="movies-list">
        {props.movies.length ? props.movies.map(movie=>{
            return <MovieCard movie={movie}/>
        }): <p>No results matching your search</p>}

    </div>
  )
}