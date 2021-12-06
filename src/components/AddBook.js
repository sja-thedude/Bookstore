import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e, title, author) => {
    e.preventDefault();// TEMPORALLY CODE: prevent clearing console and inputs to test redux logger.
    const id = title + Math.floor(Math.random() * (1000 - 100 + 1) + 100);

    const newBook = {
      id,
      title,
      author,
    };

    dispatch(addBook(newBook));
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        name="title"
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <button
        type="submit"
        onClick={(e) => submitBookToStore(e, title, author)}
      >
        ADD BOOK
      </button>
    </form>
  );
}

export default AddBook;
