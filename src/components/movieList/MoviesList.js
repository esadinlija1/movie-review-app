import "./MoviesList.css";
import React from "react";
import MovieCard from "../movieCard/MovieCard";

export default function MoviesList({ movies }) {
  return (
    <div className="movies-list container">
      {movies.length ? (
        movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })
      ) : (
        <p>No results matching your search</p>
      )}
    </div>
  );
}
