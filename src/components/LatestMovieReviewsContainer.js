import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
const NYT_API_KEY = 'e86ef5d0c2dc417eac3042048b41286a';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
  fetch(URL)
    .then(response => response.json())
    .then((reviews => {
      return this.setState({reviews})
    }));
}

  render () {
    return <div className="latest-movie-reviews"> <MovieReviews reviews={this.state.reviews} /> </div>
  }



}
