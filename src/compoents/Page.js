import React from 'react';
import { Pagination } from 'reactstrap';

const Page = ({ page, total_pages, total_results }) => {
  return (
    <Pagination >
      <p >
        Currently on page: {page} of {total_pages}
        <span > ({total_results} results)</span>
      </p>
    </Pagination>
  )
}

export default Page;
