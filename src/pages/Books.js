import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const books = useSelector((state) => state.booksReducer);

  return (
    <section className="books-page">
      {
        books.map((book) => <Book key={book.id} book={book} />)
      }
      <AddBook />
    </section>
  );
}

export default Books;
