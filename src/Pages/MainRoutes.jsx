import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage/Homepage";
import Homepage_copy from "./Homepage/Homepage";
import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { SingleProduct } from './Products/SingleProduct';

// import Payment from "./Payment"
import Products from './Products/Products'
// import Passwordreset from './Passwordreset'
import Cart from './Cart'
import TodayDeals from './Products/TodayDeals';
import LoginTest from './LoginTest';
import Signuptest from './Signuptest';
import PhoneSignupTest from './PhoneSignupTest';
import PrivateRoute from './PrivateRoute'

function MainRoutes() {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path="/s" element={<Signuptest/>}/>
        <Route path="/p" element={<PhoneSignupTest/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products/search/:searchQuery" element={<Products title={"Search"}/>}/>
        <Route path="/products/new/:searchQuery" element={<Products title={"New Arrivals"}/>}/>
        <Route path="/products/best/:searchQuery" element={<Products title={"Best Selling"}/>}/>
        <Route path="/products/clearance/:searchQuery" element={<Products title={"Clearance Sale"}/>}/>
        <Route path="/products/:searchQuery" element={<Products title={"App Only"}/>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/products/todaydeals/:searchQuery" element={<TodayDeals title={"Today's Deals"}/>} />
        {/* <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} /> 
        <Route path="/passwordreset" element={<PrivateRoute><Passwordreset/></PrivateRoute>} /> */}
        <Route path="/singleproduct:id" element={<SingleProduct/>} />
    </Routes>
  )
}

export default MainRoutes