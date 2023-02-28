import React from 'react'
import'./TableCart.css'
function TableCart() {
  return (
    <form action="" className='cart-form'>
        <table className='table-cart'>
             <thead>
                <tr>
                    <th className='product-remove'></th>
                    <th className='product-img'></th>
                    <th className='product-name'>Product</th>
                    <th className='produc-price'>Price</th>
                    <th className='product-quantity'>Quantity</th>
                    <th className='product-subtotal'>SubTotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width={10} className='product-remove'>
                            <a href="#">x</a>
                        
                    </td>
                    <td width={100} className='product-img'>
                        <img src="assets/train-express.gif" 
                                        alt="" />
                    </td>
                    <td width={450} className='product-name'>Le crime de l'orient express</td>
                    <td width={50} className='produc-price'>
                         <span className='price-amount'>$ 4.89</span>
                    </td>
                    <td width={50} className='product-quantity'>
                        <div className="quantity">
                            <input type="number" value={1} id='quantity' step={1} min={1} max={''} />
                        </div>
                    </td>
                    <td width={50} className='product-subtotal'>
                         <span className='price-amount'>$ 4.89</span>
                    </td>
                </tr>

               
            </tbody>
        </table>
    </form>
  )
}

export default TableCart