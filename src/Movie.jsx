import React from "react";
export default function Movie({movie}) {
  return (
    <div className="movie">
      <div className="image">
        <img src={movie.Poster!=="N/A"?movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
      <div className="date">
        <p>{movie.Year}</p>
      </div>
      <div className="title">
        <span className="type">{movie.Type}</span>
        <h3 className="movieTitle">{movie.Title}</h3>
      </div>
    </div>
  );
}
