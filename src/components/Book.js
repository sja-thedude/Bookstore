import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/actions/books';
import '../styles/Book.css';

function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="con-books">
      <div className="info-book">
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <ul className="act-books">
          <li>
            <button type="button" className="act comments">Comments</button>
          </li>
          <li>
            <button
              type="button"
              className="act remove"
              onClick={() => dispatch(removeBook(book.item_id))}
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="act edit">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {
    item_id: 'sdasas42323', title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian Fiction',
  },
};

export default Book;
