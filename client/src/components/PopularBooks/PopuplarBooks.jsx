import {useState,useEffect} from "react";
import BookCard from "../BookCard/BookCard";
import FindBook from "../FindBook/FindBook";
import axios, { isAxiosError } from "axios";
import './popular_book.css'

function PopuplarBooks() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get('http://localhost:5000/api/books/')
      setData(res.data)
  }

  fetchPosts()
  },[])

  return (
    <>
      <FindBook/>
      <div className="popular-container" id="popular">
        <h1>Popular Books</h1>
        <div className="bookcard-container">
        {
          data.items? data.items.slice(0,4).map(book=>(
            <BookCard key={book.id} book={book} />
          )) : 'Loading'
      }
        </div>
      </div>
    </>
    
  )
}

export default PopuplarBooks