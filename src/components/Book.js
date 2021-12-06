import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/Book.css';

function Book({ book }) {
  const dispatch = useDispatch();

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
          <button
            type="button"
            className="act remove"
            onClick={() => dispatch(removeBook(book.id))}
          >
            Remove

          </button>
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
    id: PropTypes.string,
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
