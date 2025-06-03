import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push({ id: Date.now(), name: action.payload });
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((b) => b.id !== action.payload);
    },
    updateBook: (state, action) => {
      const { id, newName } = action.payload;
      const book = state.books.find((b) => b.id === id);
      if (book) book.name = newName;
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;