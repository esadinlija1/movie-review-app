import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BASE_URL } from "./constants";
import "./App.css";
import MoviesList from "./components/movieList/MoviesList";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Layout from "./components/layout/Layout";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey, "key");

  useEffect(() => {
    const fetchData = async () => {
      const URL = query
        ? `${BASE_URL}/search/movie?api_key=${apiKey}&query=${query}`
        : `${BASE_URL}/movie/popular?api_key=${apiKey}`;
      const result = await fetch(URL);
      result.json().then((json) => {
        setMovies(json.results);
        console.log(json.results);
      });
    };
    fetchData();
  }, [query]);

  return (
    <Routes>
      <Route element={<Layout onChangeQuery={setQuery} />}>
        <Route path="/" element={<MoviesList movies={movies} />} />
        <Route path="movie/:id" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<h2>404 page not found</h2>} />
    </Routes>
  );
};

export default App;
