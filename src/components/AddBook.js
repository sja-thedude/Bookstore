import React from 'react';

function AddBook() {
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Book title" />
      <input type="dropdown" placeholder="Category" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBook;
