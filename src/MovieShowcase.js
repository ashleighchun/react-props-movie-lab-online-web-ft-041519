import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movieCard => {
      return <MovieCard title={movieCard.title} IMDBRating={movieCard.IMDBRating} genres={movieCard.genres} poster={movieCard.poster} />
    });
  }
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
