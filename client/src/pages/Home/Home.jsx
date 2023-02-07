import React from 'react'
import FeaturedBook from '../../components/FeaturedBook/FeaturedBook'
import Footer from '../../components/Footer/Footer'
import NewBook from '../../components/NewBooks/NewBook'
import PopuplarBooks from '../../components/PopularBooks/PopuplarBooks'
import Slider from '../../components/Slider/Slider'
import './home.css'

export default function Home() {
  return (
      <>
        <Slider/>
         <div className='home-container'>
              <PopuplarBooks/>
              <FeaturedBook/>
              <NewBook/>
              <Footer/>
          </div>
        </>
       
  )
}
