import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function MovieDetails() {
  const { id } = useParams();
  // useEffect koji poziva fetch request sa idom i lista informacije
  return (
    <div className="movie-details">
      This is details page for a movie with the id:{id}
    </div>
  );
}
