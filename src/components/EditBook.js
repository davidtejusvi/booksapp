import React, { useState } from 'react';


const EditBook = ({ book, onEdit, setShowEdit }) => {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title)
        setShowEdit(false)
    };

    return (
        <form className='book-edit' onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange} />
            <button className='button is-primary'> Save</button>
        </form >
    )
}

export default EditBook