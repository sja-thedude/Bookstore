/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { CREATE_BOOK, FETCH_ALL_BOOKS, REMOVE_BOOK } from '../../actions/actionTypes';

const handleData = (data) => {
  const books = [];

  Object.keys(data).map((key) => {
    const book = data[key][0];
    book.item_id = key;

    return books.push(book);
  });

  return books;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];

    case FETCH_ALL_BOOKS:
      return handleData(action.payload);

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
