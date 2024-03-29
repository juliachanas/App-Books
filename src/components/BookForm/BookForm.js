import { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title: title, author: author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* przekazanie aktualnej wartości inputu */}
      Title:{' '}
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Author:{' '}
      <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button>Add book</button>
    </form>
  );
};

export default BookForm;
