const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ADqUJWADhO7PJ9KFk8Mc/books';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteData = async (url, id) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchBooks = () => getData(url);

export const postBook = (book) => postData(url, book);

export const deleteBook = (id) => deleteData(`${url}/${id}`, id);
