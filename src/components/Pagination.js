import React from 'react';

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPages = () =>
    pageNumbers.map(page => (
      <li className="page-item" key={page}>
        <a href="#!" className="page-link">
          {page}
        </a>
      </li>
    ));

  return (
    <nav>
      <ul className="pagination">{renderPages()}</ul>
    </nav>
  );
};

export default Pagination;
