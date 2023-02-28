import {useState,useEffect} from 'react'
import BookCard from '../BookCard/BookCard'
import './Newbook.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function NewBook() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get('http://localhost:5000/api/books/')
      setData(res.data)
  }

  fetchPosts()
  },[])


  return (
    <div className="new-container">
        <h1>New Books</h1>
        <div className="bookcard-container">
        {
          data.items? data.items.slice(4,8).map(book=>(
            <BookCard key={book.id} book={book} />
          )) : 'Loading'
      }
        </div>
        <div className="explore">
            <h2>Browse Through Our Complete Library</h2>
            <Link to={'/explore'} className='newbook-link'>Explore Collection</Link>
        </div>
    </div>
  )
}

export default NewBook