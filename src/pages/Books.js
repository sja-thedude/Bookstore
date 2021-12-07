import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getBooks } from '../redux/actions/books';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, [currentId, dispatch]);

  return (
    <section className="books-page">
      {
        books.map((book) => <Book key={book.item_id} book={book} />)
      }
      <AddBook setCurrentId={setCurrentId} />
    </section>
  );
}

export default Books;
