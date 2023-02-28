import React from 'react'
import BookAuthor from '../BookAuthor/BookAuthor'
import TableBook from '../TableBook/TableBook'
import './bookInfo.css'
function BookInfo({book}) {
  return (
    <div className='bookinfo-wrapper'>
        <div className="content-wrapper">
            <div className="content-book-container">
                <div className="content-book">
                    <div className="book-imageContainer">
                        <img className='book-image' src={book?.book_url} alt="" />
                    </div>
                    <div className="book-summary">
                        <h1 className="product-title">{book?.title}</h1>
                        <div className="book-description">
                            <p>
                                {book?.description}
                            </p>
                        </div>
                    <div className="product-price">
                        <p className="price">${book?.price}</p>
                        <span className='in-stock'>289 in stock</span>
                        <form action="" className='cart'>
                            <div className="quantity">
                                <input id='quantity'  value={1} type="number" step={1} min={1} max={289} />
                                <button className='add-cart'>Add to cart</button>
                            </div>
                        </form>
                    </div>
                 </div>
                </div>
                <div className="product-details">
                    <div className="book-details-container">
                        <div className="col-first">
                            <div className="book-details">
                                <h3>Book Details</h3>
                                <TableBook book={book}/>
                            </div>
                        </div>
                        <div className="col-second">
                            <div className="book-author">
                                <BookAuthor authors={book?.authors[0]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookInfo