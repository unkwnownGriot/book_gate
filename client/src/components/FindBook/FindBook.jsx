import React from 'react'
import './findBook.css'
function FindBook() {
  return (
    <div className="findbook-container">
            <input type="text" placeholder='Book Title' />
            <input type="text" placeholder='Book Author' />
            <button>
              Search book
            </button>
    </div>
  )
}

export default FindBook