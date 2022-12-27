import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import Footer from './mini components/Footer';
import MoveToTop from './mini components/MoveToTop';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/details/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <MoveToTop/>
    </Router>
  )
}

export default App