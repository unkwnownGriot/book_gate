import React from 'react'
import BookCard from '../BookCard/BookCard'
import './Newbook.css'
function NewBook() {
  return (
    <div className="new-container">
        <h1>New Books</h1>
        <div className="bookcard-container">
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
        <div className="explore">
            <h2>Browse Through Our Complete Library</h2>
            <a href="#">Explore Collection</a>
        </div>
    </div>
  )
}

export default NewBook