import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

function Book({ book }) {
  return (
    <div className="con-books">
      <h3>{book.genre}</h3>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <ul className="act-books">
        <li>
          <button type="button" className="act comments">Comments</button>
        </li>
        <li>
          <button type="button" className="act remove">Remove</button>
        </li>
        <li>
          <button type="button" className="act edit">Edit</button>
        </li>
      </ul>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {
    id: 'secret34235', title: 'Secrets of the Millionaire Mind', author: 'T.Harv Eker', genre: 'Non-Fiction',
  },
};

export default Book;
