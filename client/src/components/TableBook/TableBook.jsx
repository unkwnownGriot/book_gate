import React from 'react'
import './tableBook.css'
function TableBook() {
  return (
    <table>
        <tbody>
            <tr>
                <td className='td-title'>Pages</td>
                <td><p>416</p></td>
            </tr>
            <tr>
                <td className='td-title'>Publisher</td>
                <td><p>Livre de Poche Jeunesse</p></td>
            </tr>
            <tr>
                <td className='td-title'>Language</td>
                <td><p>French</p></td>
            </tr>
            <tr>
                <td className='td-title'>ISBN</td>
                <td><p>2010009274</p></td>
            </tr>
            <tr>
                <td className='td-title'>Released</td>
                <td><p>april 1975</p></td>
            </tr>
        </tbody>
    </table>
  )
}

export default TableBook