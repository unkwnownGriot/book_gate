import React from 'react'
import './bookAuthor.css'
function BookAuthor() {
  return (
    <>
        <h3 className='author-about'>About the Author</h3>
        <div className="img-containerr">
          <img className='author-img' src="assets/agatha.jpg" alt="" />
        </div>
        
        <h4 className='author-name'>A. Christie</h4>
        <p className='author-life'>
        Dame Agatha Mary Clarissa Christie, Lady Mallowan, was an English writer 
        known for her 66 detective novels and 14 short story collections, particularly
         those revolving around fictional detectives Hercule Poirot and Miss Marple. 
         She also wrote the world's longest-running play, the murder mystery The Mousetrap,
          which has been performed in the West End since 1952. A writer during the 
          "Golden Age of Detective Fiction", Christie has been called the "Queen of Crime".
           She also wrote six novels under the pseudonym Mary Westmacott. <br />
            In 1971, she was made a Dame (DBE) by Queen Elizabeth II for her contributions
             to literature. Guinness World Records lists Christie as the best-selling
         fiction writer of all time, her novels having sold more than two billion copies
        </p>
    </>
  )
}

export default BookAuthor