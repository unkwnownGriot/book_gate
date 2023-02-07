import React from 'react'
import './navbar.css'
function Navbar({color}) {
  return (
    <div className='navbar' style={{'background':`${color?'black':'transparent'}`}} id='nav'>
        <div className="logo">
          <h1>Bookie</h1>
        </div>
        <nav>
          <ul className='navbar-list'>
            <li className='navbar-item'><a href="#">Home</a></li>
            <li className='navbar-item'><a href="#">Bookstore</a></li>
            <li className='navbar-item'><a href="#">Blog</a></li>
            <li className='navbar-item'><a href="#">Contact</a></li>
            <li className='navbar-item'><a href="#">
              <i className='fa fa-shopping-basket' >
              <span className='badge-amount'>3</span>
            </i></a>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar