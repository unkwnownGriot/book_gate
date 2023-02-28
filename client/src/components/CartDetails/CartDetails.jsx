import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { country } from '../../country'
import BookCard from '../BookCard/BookCard'
import CountrySelector from '../CountrySelector/CountrySelector'
import './cartdetails.css'
function CartDetails() {
const [data,setData] = useState([])

useEffect(()=>{
    const FetchData = async ()=>{
        const res = await axios.get('http://localhost:5000/api/books/')
        setData(res.data)
    }

    FetchData()
},[])

const listBook = data.items?.slice(0,4).map((book)=> <BookCard book={book} />)
console.log(data)

  return (
    <div className='cart-details'>
        <div className="cross-sells">
            <h2>You may be interested in…</h2>
            <ul className='related-books'>
               {listBook}
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