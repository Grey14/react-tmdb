import React from 'react';
import { Link } from 'react-router-dom';
//import { Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';
import '../style/App.css'

const Page = ({ movie, getAllMovies }) => {
  let previousPage = movie.page - 1;
  let nextPage = movie.page + 1;

  return (
    <div className="Page">
      Currently on page: {movie.page.toLocaleString('en-US')} of {movie.total_pages.toLocaleString('en-US')}
      <span > ({movie.total_results.toLocaleString('en-US')} results)</span>

      <div className="Page-Button">
        {
          movie.page === 1 ? "" : <Link className='btn btn-default pull-left' to={process.env.PUBLIC_URL+`/moive/${previousPage}`}>Previous</Link>
        }
        {' '}
        {
          movie.page === 1000 ? "" : <Link className='btn btn-default pull-right' to={process.env.PUBLIC_URL+`/moive/${nextPage}`}>Next</Link>
        }
        {/* { this.props.isLoading ? <span>Loading...</span> : [] } */}
      </div>
      <hr />
    </div>
  )
}

export default Page;
