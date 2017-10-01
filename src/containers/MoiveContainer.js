import React, { Component } from 'react';
import {
  Row, Col, Button, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter, Alert
} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllMovies } from '../actions/index'
import MovieList from '../compoents/MovieList'
import Page from '../compoents/Page'

class MoiveContainer extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    const { movies, getAllMovies } = this.props;
    let movieList = [];
    let page =0;
    let total_pages = 0;
    let total_results = 0;

    if (!Array.isArray(movies)) {
      console.log(movies);
      movieList = movies.results;
      page = movies.page.toLocaleString('en-US');
      total_pages = movies.total_pages.toLocaleString('en-US');
      total_results = movies.total_results.toLocaleString('en-US');
    }

    return (
      <div>
        <Row>
          {
            movieList.map((movie, idx) => (
              <Col key={idx} sm="6" md="6">
                <MovieList
                  movie={movie}
                ></MovieList>
              </Col>
            ))
          }
        </Row>
        <br/>
        <Page
          page={page}
          total_pages={total_pages}
          total_results={total_results}
        ></Page>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ getAllMovies }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MoiveContainer)
