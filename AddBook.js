import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookName.trim()) {
      dispatch(addBook(bookName));
      setBookName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="Book name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBook;