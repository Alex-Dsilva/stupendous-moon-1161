import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage/Homepage";
import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Products from './Products/Products'
import Cart from './Cart'
import TodayDeals from './Products/TodayDeals';

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/TodayDeals" element={<TodayDeals/>} />
    </Routes>
  )
}

export default MainRoutes