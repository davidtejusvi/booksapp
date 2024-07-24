import React, { useState } from 'react';
import EditBook from './EditBook';


const BookShow = ({ book, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    const handleEditclick = () => {
        setShowEdit(!showEdit)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <EditBook
            book={book}
            onEdit={onEdit}
            setShowEdit={setShowEdit}
        />
    }
    return (
        <div className='book-show'>
            <div>{content}</div>
            <div className='actions'>
                <button className="edit" onClick={handleEditclick}>Edit</button>
                <button className='delete' onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow