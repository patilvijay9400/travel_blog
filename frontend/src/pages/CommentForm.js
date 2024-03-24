import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ comment, name, email });
        setComment('');
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="comment" className="form-label">Comment</label>
                <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-3 d-flex gap-3 w-100">
                <div className='w-50'>

                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className='w-50'>
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            </div>
            
            <button type="submit" className="btn btn-primary">Post Comment</button>
        </form>
    );
};

export default CommentForm;
