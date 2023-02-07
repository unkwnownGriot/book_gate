import React from "react";
import BookCard from "../BookCard/BookCard";
import FindBook from "../FindBook/FindBook";
import './popular_book.css'

function PopuplarBooks() {
  return (
    <>
      <FindBook/>
      <div className="popular-container" id="popular">
        <h1>Popular Books</h1>
        <div className="bookcard-container">
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
      </div>
    </>
    
  )
}

export default PopuplarBooks