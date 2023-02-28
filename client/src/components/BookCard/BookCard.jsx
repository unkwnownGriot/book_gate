import React from 'react'
import './bookcard.css'
import { Link } from 'react-router-dom'
function BookCard({book}) {
  return (
    <div className='card'>
        <div className="img-container">
          <Link to={`/book/${book.id}`}>
            <img className='card-img' src={book.book_url ? book.book_url : 'assets/train-express.gif'} alt="" />
          </Link>
        </div>
        <div className="card-container">
            <h2 className='card-title'>{book.title ? book.title : "Le crime de l'orient express"}</h2>
            {book.authors.map(author=>(
               <span key={author.name} className='card-author'>{author.name}</span>
            ))}
            <span className='card-price'>
                {book.price}
            </span>
        </div>
        <button className='card-btn'>Add to Cart</button>
    </div>
  )
}

export default BookCard