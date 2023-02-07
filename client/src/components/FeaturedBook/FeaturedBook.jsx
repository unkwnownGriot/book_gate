import React from 'react'
import './featuredBook.css'
function FeaturedBook() {
  return (
    <div className='wrapper'>
        <div className="container">
            <div className="first">
                <div className="text-part">
                    <span>Featured Book</span>
                    <div className='book-info'>
                        <h2>Algorithms For Dummies </h2>
                        <span>John paul mueller & Luca Massaron</span>
                    </div>
                    <p>
                    Discover how algorithms shape and impact our digital worldAll 
                    data, big or small, starts with algorithms. Algorithms are 
                    mathematical equations that determine what we see—based on our
                     likes, dislikes, queries, views, interests, relationships, and
                      more—online. They are, in a sense, the electronic gatekeepers
                       to our digital, as well as our physical, world. This book 
                       demystifies the subject of algorithms so you can understand
                        how important they are business and scientific decision
                         making. 
                    </p>
                    <button>Get this book</button>
                </div>
            </div>
            <div className="second">
                <img src="assets/algorithms.jpg" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default FeaturedBook