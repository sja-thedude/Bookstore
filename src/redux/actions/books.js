import {
  CREATE_BOOK, FETCH_ALL_BOOKS, REMOVE_BOOK,
} from './actionTypes';
import * as api from '../../api/api';

// API action creators
export const getBooks = () => async (dispatch) => {
  try {
    const data = await api.fetchBooks();

    dispatch({ type: FETCH_ALL_BOOKS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    await api.postBook(book);

    dispatch({ type: CREATE_BOOK, payload: book });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id);

    dispatch({ type: REMOVE_BOOK, payload: id });
  } catch (error) {
    throw new Error(error.message);
  }
};
