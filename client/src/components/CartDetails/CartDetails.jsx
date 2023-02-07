import React from 'react'
import { country } from '../../country'
import BookCard from '../BookCard/BookCard'
import CountrySelector from '../CountrySelector/CountrySelector'
import './cartdetails.css'
function CartDetails() {
  return (
    <div className='cart-details'>
        <div className="cross-sells">
            <h2>You may be interested in…</h2>
            <ul className='related-books'>
                <li><BookCard/></li>
                <li><BookCard/></li>
                <li><BookCard/></li>
                <li><BookCard/></li>
                <li><BookCard/></li>
                <li><BookCard/></li>
                <li><BookCard/></li>
            </ul>
        </div>
        <div className="cart-total-shipping">
            <h2>Cart totals</h2>
            <table className='shop-table'>
                <tbody>
                    <tr className='cart-subtotal'>
                        <th>Subtotal</th>
                        <td><span className='price-amount'>$ 4.89</span></td>
                    </tr>
                    <tr >
                        <th>Shipping</th>
                        <td>
                            <div>
                                <label>Flat rate:</label>
                                <span className='price-amount'>$ 4.89</span>
                            </div>
                            <p className='shiping-destination'>
                            Shipping to <strong>Thailand</strong> 
                            </p>
                            <form action="">
                                <span className='shiping-address-btn'>change address <i className='fa fa-truck'></i></span>
                                <CountrySelector/>
                                <input type="text" placeholder='Town/City' />
                                <input type="text" placeholder='Postalcode/Zip' />
                            </form>
                        </td>
                    </tr>
                    <tr className='order-total'>
                        <th>Total</th>
                        <td>
                           <strong><span className='price-amount'>$4.89</span></strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="proceed-checkout">
                <button>Proceed to checkout</button>
                <span>— OR —</span>
            </div>
        </div>
    </div>
  )
}

export default CartDetails