import React from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Book Manager (Redux Toolkit)</h1>
      <AddBook />
      <BookList />
    </div>
  );
};

export default App;