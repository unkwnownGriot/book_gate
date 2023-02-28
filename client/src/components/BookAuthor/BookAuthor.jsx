import React from 'react'
import './bookAuthor.css'
function BookAuthor({authors}) {
  return (
    <>
        <h3 className='author-about'>About the Author</h3>
        <div className="img-containerr">
          <img className='author-img' src={authors?.url_pic} alt="" />
        </div>
        
        <h4 className='author-name'>{authors?.name}</h4>
        <p className='author-life'>
          {authors?.about}
        </p>
    </>
  )
}

export default BookAuthor