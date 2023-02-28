import React from 'react'
import CartDetails from '../../components/CartDetails/CartDetails'
import Navbar from '../../components/Navbar/Navbar'
import TableCart from '../../components/TableCart/TableCart'
import './cart.css'

function Cart() {
  return (
    <>
        <Navbar color={true}/>
        <section className='page-title'>
                <h2>Cart</h2>
                <a href="">Home /</a> Cart
      </section>
      <div className="cart-wrapper">
        <div className="cart-content">
            <div className="main-container">
              <TableCart/>
              <CartDetails/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart