import React from 'react'
import './bookcard.css'

function BookCard(props) {
  return (
    <div className='card'>
        <div className="img-container">
        <img className='card-img' src="assets/train-express.gif" alt="" />
        </div>
        <div className="card-container">
            <h2 className='card-title'>{props.title ? props.title : "Le crime de l'orient express"}</h2>
            <span className='card-author'>Agatha christie</span>
            <span className='card-price'>
                $5.34
            </span>
        </div>
        <button className='card-btn'>Add to Cart</button>
    </div>
  )
}

export default BookCard