import "./componentsStyles/MovieCard.css";
import React from "react";
import Rating from '@mui/material/Rating';

const poster_base_url = "https://image.tmdb.org/t/p/w200/";

export default function MovieCard(props) {


  

  return (
    <div className="card-container" >
      <img src={poster_base_url + props.movie.poster_path} alt={props.movie.title} className="poster" />
      <div className="basic-info">
        <div>
          <h1>{props.movie.title}</h1>
          <Rating
            name="customized-10-stars"
            max={10} // Allow up to 10 stars
            value={props.movie.vote_average} // Assuming vote_average is already out of 10
            precision={0.1}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
