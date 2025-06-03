import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, updateBook } from '../redux/bookSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  return (
    <div>
      <h2>Book List:</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {editId === book.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={() => {
                  dispatch(updateBook({ id: book.id, newName: editName }));
                  setEditId(null);
                }}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {book.name}
                <button onClick={() => {
                  setEditId(book.id);
                  setEditName(book.name);
                }}>Edit</button>
                <button onClick={() => dispatch(deleteBook(book.id))}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;