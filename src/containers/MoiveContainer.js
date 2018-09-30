import React, { Component } from 'react';
import {
  Row, Col
} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllMovies } from '../actions/index'
import MovieItems from '../components/MovieItems'
import Page from '../components/Page'

class MoiveContainer extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    let pageIdx = parseInt(this.props.match.params.pageIdx,10) || 1;
    this.props.getAllMovies(pageIdx, 'popularity.desc', 'en-U');    
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    if (this.props.match.params.pageIdx !== nextProps.match.params.pageIdx) {
      let pageIdx = parseInt(nextProps.match.params.pageIdx,10) || 1;
      this.props.getAllMovies(pageIdx, 'popularity.desc', 'en-U');
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { movies, getAllMovies } = this.props;
    console.log(this.props);
    //const  { movies, isLoading } = state;
    let movieTemps = {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0
    }

    if (!Array.isArray(movies)) {
      //console.log(movies);
      movieTemps = movies;
    }

    return (
      <div>
        <Row>
          {
            movieTemps.results.map((movieItem, idx) => (
              <Col key={idx} sm="6" md="6">
                <MovieItems
                  movie={movieItem}
                ></MovieItems>
              </Col>
            ))
          }
        </Row>
        <br />
        <Page
          movie={movieTemps}
          getAllMovies={getAllMovies}
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
