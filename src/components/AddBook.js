import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/books';
import options from './options';
import '../styles/AddBook.css';

function AddBook({ setCurrentId }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleCategoryInputs = () => {
    const newCategoryArray = [];

    if (category.length > 0) {
      category.forEach((item) => newCategoryArray.push(item.value));
      return newCategoryArray.join(', ');
    }

    return 'Not Specified';
  };

  const submitBookToStore = (e) => {
    e.preventDefault();// TEMPORALLY CODE: prevent clearing console and inputs to test redux logger.
    const id = title + Math.floor(Math.random() * (1000 - 100 + 1) + 100);
    setCurrentId(id);

    const newBook = {
      item_id: id,
      title,
      category: handleCategoryInputs(),
    };

    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={(e) => submitBookToStore(e)} className="add-book-form">
      <h2>ADD NEW BOOK</h2>
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Select
          options={options()}
          value={category}
          placeholder="Select category"
          onChange={setCategory}
          className="multi-select"
          Searchable
          Clearable
          isMulti
          required
        />

        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}

AddBook.propTypes = {
  setCurrentId: PropTypes.func.isRequired,
};

export default AddBook;
