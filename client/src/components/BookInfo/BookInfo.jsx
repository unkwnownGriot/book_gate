import React from 'react'
import BookAuthor from '../BookAuthor/BookAuthor'
import TableBook from '../TableBook/TableBook'
import './bookInfo.css'
function BookInfo() {
  return (
    <div className='bookinfo-wrapper'>
        <div className="content-wrapper">
            <div className="content-book-container">
                <div className="content-book">
                    <div className="book-imageContainer">
                        <img className='book-image' src="assets/train-express.gif" alt="" />
                    </div>
                    <div className="book-summary">
                        <h1 className="product-title">Le crime de l'orient express</h1>
                        <div className="book-description">
                            <p>
                                Dans cette histoire tirée du célèbre roman d'Agatha Christie, 
                                le célèbre détective belge Hercule Poirot prend l'Orient-Express
                                pour rentrer d'Istanbul à Londres mais alors que le train se retrouve
                                bloqué par la neige dans les montagnes yougoslaves, un meurtre est commis.
                                Les 13 passagers sont tous suspects et le fameux détective Hercule Poirot
                                se lance dans une course contre la montre pour identifier l'assassin,
                                avant qu'il ne frappe à nouveau.
                            </p>
                        </div>
                    <div className="product-price">
                        <p className="price">$5.43</p>
                        <span className='in-stock'>289 in stock</span>
                        <form action="" className='cart'>
                            <div className="quantity">
                                <input id='quantity' value={1} type="number" step={1} min={1} max={289} />
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
                                <TableBook/>
                            </div>
                        </div>
                        <div className="col-second">
                            <div className="book-author">
                                <BookAuthor/>
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