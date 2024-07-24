import React, { useState } from 'react'

const CreateBook = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const handleChage = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('')
    }
    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label> Title</label>
                <input
                    type='text'
                    name='title'
                    className='input'
                    placeholder='Create a book'
                    value={title}
                    onChange={handleChage}
                />
                <button className='button'>Create</button>
            </form>
        </div>
    )
}

export default CreateBook