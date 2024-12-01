import "./MovieCard.css";
import React from "react";

import { Link } from "react-router";
import { POSTER_URL } from "../../constants";

const poster_base_url = POSTER_URL;

export default function MovieCard({ movie }) {
  return (
    <Link to={`movie/${movie.id}`} className="card-container">
      <img
        src={poster_base_url + movie.poster_path}
        alt={movie.title}
        className="poster"
      />
      <div className="basic-info">
        <p>{movie.title}</p>
        <div className="stats">
          <div className="stat">
            <span className="emoji">📅</span>
            <span className="value">{movie.release_date.split("-")[0]}</span>
          </div>
          <div className="stat">
            <span className="emoji">⭐</span>
            <span className="value">
              {movie.vote_average} ({movie.vote_count} people rated)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
