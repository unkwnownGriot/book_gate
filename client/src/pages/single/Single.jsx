import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FindBook from '../../components/FindBook/FindBook'
import './single.css'
import BookInfo from '../../components/BookInfo/BookInfo'
import Footer from '../../components/Footer/Footer'

function Single() {
  return (
    <div className='single-container'>
        <Navbar color={true}/>
        <div className="single-wrapper">
            <section className='page-title'>
                <h2>Bookstore</h2>
                <a href="">Home /</a> Le crime de l'orient express
            </section>
            <FindBook/>
            <BookInfo/>
            <Footer/>
        </div>
    </div>
  )
}

export default Single