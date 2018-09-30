import React from 'react';
import { Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';

let backdropImg = 'https://image.tmdb.org/t/p/w500';
let posterImg = 'https://image.tmdb.org/t/p/original';

const MovieList = ({ movie }) => {
  //console.log(movie);
  return (
    <div >
      <Card>
        <CardImg top width="35%" src={backdropImg + movie.poster_path} alt="Card image cap" />
        <CardBlock>
          <CardTitle>{movie.original_title}</CardTitle>
          <CardSubtitle>
            {movie.release_date}
          </CardSubtitle>
          {/* <CardText>{movie.overview}</CardText>*/}
          {/* <Line /> */}
        </CardBlock>
      </Card>
    </div>
  )
}

export default MovieList;
