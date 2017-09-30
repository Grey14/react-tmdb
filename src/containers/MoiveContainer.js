import React, { Component } from 'react';
import {
    Row, Col, Button, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter, Alert
} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllMovies } from '../actions/index'
import MovieList from '../compoents/MovieList'

class MoiveContainer extends Component {
    componentDidMount() {
        this.props.getAllMovies();
    }

    render() {
        const { movies, getAllMovies } = this.props;
        //console.log(movies);
        return (
            <div>
                <Row>
                    {
                        movies.map((movie, idx) => (
                            <Col key={idx} sm="6" md="6">
                                <MovieList 
                                    movie={movie}
                                ></MovieList>
                            </Col>
                        ))
                    }
                </Row>
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