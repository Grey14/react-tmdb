import React from 'react';
// import { Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import '../style/App.css';
let backdropImg = 'https://image.tmdb.org/t/p/w500';
// let posterImg = 'https://image.tmdb.org/t/p/original';

const MovieList = ({ movie }) => {
  //console.log(movie);
  return (
    <div className="Card-Div">
      <div className="border">
        <div className="media">
          <img width="35%" className="mr-3" src={backdropImg + movie.poster_path} alt=""></img>
          <div className="media-body">
            <h6 className="mt-0">{movie.title}</h6>          
            <div className="mb-1 text-muted">{movie.release_date}</div>
            <p className="card-text mb-auto">
            {
              movie.overview.length >= 150 ? movie.overview.substring(0, 150) + "..." : movie.overview
            } 
            </p>         
          </div>
        </div>
        <div className="card-footer text-muted">
          Vote Average : {movie.vote_average}
        </div>
      </div>
    </div>
  )
}

export default MovieList;
