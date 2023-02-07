import React, { useEffect } from 'react'
import './footer.css'
function Footer() {
  useEffect(()=>{
    const handleScroll = (event)=>{
      event.preventDefault()
      const href = event.target.getAttribute('href');
      const element = document.querySelector(href);
      const offset = 50;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const destination = elementPosition - offset;
      window.scrollTo({
        top: destination,
        behavior:'smooth'
      })
    }

    const links = document.querySelectorAll('.smooth-scroll')
    links.forEach(link=>{
      link.addEventListener('click',handleScroll)
    })

    return ()=>{
      links.forEach(link=> link.removeEventListener('click',handleScroll))
    }
  },[])


  return (
    <footer className='site-footer'>
        <div className="footer-container">
            <ul className="footer-list">
                <li><a href="#nav" className='smooth-scroll'>Home</a></li>
                <li><a href="#nav" className='smooth-scroll'>Blog</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Linkedin</a></li>
            </ul>
            <div className="footer-credit">
              <p>Copyright © Bookie 2023</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer