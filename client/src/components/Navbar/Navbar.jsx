import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar({color}) {
  return (
    <div className='navbar' style={{'background':`${color?'black':'transparent'}`}} id='nav'>
        <div className="logo">
          <h1>Bookie</h1>
        </div>
        <nav>
          <ul className='navbar-list'>
            <Link to={'/'} className='link-nav'><li>Home</li></Link> 
            <Link to={'/explore'} className='link-nav'><li>Bookstore</li></Link> 
            <Link  className='link-nav'><li>Contact</li></Link> 
            <li className='navbar-item'><a href="https://medium.com/@elsamatchole" target='_blank'>Blog</a></li>
            <Link className='link-nav' to={'/cart'}>
              <li>
                <i className='fa fa-shopping-basket' ><span className='badge-amount'>3</span></i>
              </li>
            </Link> 
            
          </ul>
        </nav>
      </div>
  )
}

export default Navbar