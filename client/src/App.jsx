import { Route,Routes } from 'react-router'
import './App.css'
import NotFound from './components/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
import Explore from './pages/Explore/Explore'
import Home from './pages/Home/Home'
import Single from './pages/single/Single'

function App() {
  

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/:book_id' element={<Single/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
