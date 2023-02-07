import React,{useEffect, useRef, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Slider_items} from '../../data'
import './slider.css'


function Slider() {
  const [currentState,setCurrentState] = useState(0)
  const handleStateChange = ()=>{
    if(currentState === Slider_items.length - 1){
      setCurrentState(0)
    }else{
      setCurrentState(currentState+1)
    }
  }

  useEffect(()=>{
    const timer = setInterval(handleStateChange,3000)

    return ()=> clearInterval(timer)

  },[handleStateChange])

  return (
    <div className='slide-container'>
       <div className="slider">
        <img src={Slider_items[currentState].img} id='slideImg' alt="" />
       </div>
       <div className="overlay">
          <Navbar/>
          <div className="content">
            <p className='content-short'>{Slider_items[currentState].short}</p>
            <h1 className='content-title'>{Slider_items[currentState].title}</h1>
            <button className='content-btn'><a href="#">See more</a></button>
          </div>
       </div>
    </div>
  )
}

export default Slider