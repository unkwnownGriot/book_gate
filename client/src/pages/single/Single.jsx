import {useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FindBook from '../../components/FindBook/FindBook'
import './single.css'
import BookInfo from '../../components/BookInfo/BookInfo'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Single() {
  const {book_id} = useParams()
  const [book,setBook] = useState()

  useEffect(()=>{
      const fectchBook = async()=>{
        const res = await axios.get(`http://localhost:5000/api/books/${book_id}`)
        setBook(res.data)
      }
      fectchBook()
  },[book_id])

  console.log(book)
  return (
    <div className='single-container'>
        <Navbar color={true}/>
        <div className="single-wrapper">
            <section className='page-title'>
                <h2>Bookstore</h2>
                <Link to={'/'}>Home /</Link> {book?.title}
            </section>
            <FindBook/>
            <BookInfo book={book}/>
            <Footer/>
        </div>
    </div>
  )
}

export default Single