import React from 'react';

interface BookListProps {}

const BookList: React.FC<BookListProps> = ({}) => {
  return (
    <div className="book-list">
      <ul>
        <li>the way of kings</li>
        <li>the name of the wind</li>
        <li>the final empire</li>
      </ul>
    </div>
  );
};
export default BookList;
