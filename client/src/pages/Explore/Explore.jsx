import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from '../../components/BookCard/BookCard'
import FindBook from '../../components/FindBook/FindBook'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import './explore.css'

function Explore() {
  const [items,setItems] = useState([])
  const [links,setLinks] = useState({
    next:null,
    prev:null,
    self:null
  })

  useEffect(()=>{
    const fetchPosts = async () =>{
        const res = await axios.get('http://localhost:5000/api/books/')
        setItems(res.data.items)
        setLinks(res.data._links)
    }

    fetchPosts()
  },[])
  
  // console.log(links)

  const refetchPosts = async (link)=>{
      const res = await axios.get(`http://localhost:5000/${link}`)
      setItems(res.data.items)
      setLinks(res.data._links)
  }


  return (
    <div>
      <Navbar color={true}/>
      <section className='page-title'>
                <h2>Explore</h2>
                <a href="">Home /</a> Le crime de l'orient express
      </section>
      <FindBook/>
      <div className='explore-wrapper'>
        <div className='explore-container'>
        <div className='paginate-container'>
        {
        items? items.map(el=>(
          <BookCard key={el.id} title={el.title} />
        )) : 'Loading'
      }
    </div>
      <ul className='pagination'>
        <li onClick={()=> refetchPosts(links.prev)} ><a className={`page-num${links.prev ?'':' disabled'}`} href='#'>← Previous</a></li>
        <li onClick={()=> refetchPosts(links.next)} ><a className={`page-num${links.next ?'':' disabled'}`} href='#'>Next →</a></li>
      </ul>
        </div>
      </div>
      <Footer />
   
    </div>
  )
}

export default Explore