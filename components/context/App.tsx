import React from 'react';
import BookList from './BookList';
import Navbar from './Navbar';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
};
export default App;
