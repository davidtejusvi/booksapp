import React, { useState } from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([])

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    });
    setBooks(updatedBooks)
  }

  const editBookByID = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book;
    })
  }

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.random(Math.random() * 9999),
        title: title
      }
    ]
    setBooks(updatedBooks)
  }
  return (
    <div className="App">
      {books.length}
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookByID} />
      <CreateBook onCreate={createBook} />
    </div>
  );
}

export default App;
