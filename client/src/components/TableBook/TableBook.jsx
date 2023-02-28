import React from 'react'
import './tableBook.css'
function TableBook({book}) {
  return (
    <table>
        <tbody>
            <tr>
                <td className='td-title'>Pages</td>
                <td><p>{book?.number_pages}</p></td>
            </tr>
            <tr>
                <td className='td-title'>Publisher</td>
                <td><p>Livre de Poche Jeunesse</p></td>
            </tr>
            <tr>
                <td className='td-title'>Language</td>
                <td><p>{book?.language}</p></td>
            </tr>
            <tr>
                <td className='td-title'>ISBN</td>
                <td><p>{book?.book_isbn}</p></td>
            </tr>
            <tr>
                <td className='td-title'>Released</td>
                <td><p>{book?.date_parution}</p></td>
            </tr>
        </tbody>
    </table>
  )
}

export default TableBook