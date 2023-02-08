import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage/Homepage";
import NewArrivals from './NewArrivals';
import BestSelling from './BestSelling';
import Brand from './Brand';
import Clearance from './Clearance';
import Deals from './Deals';
// import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Cart } from './Cart/Cart';
// import Payment from "./Payment"
// import Products from './Products/Products'
// import Passwordreset from './Passwordreset'
// import Cart from './Cart'

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/new" element={<NewArrivals/>}/>
        <Route path="/best" element={<BestSelling/>}/>
        <Route path="/brands" element={<Brand/>}/>
        <Route path="/clearance" element={<Clearance/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* 
        <Route path="/newproducts" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/bestproducts" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/clearanceproducts" element={<PrivateRoute></PrivateRoute>}/>
        <Route path="/apponlyproducts" element={ <PrivateRoute></PrivateRoute>}/> */}
        {/* <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} /> */}
        {/* <Route path="/todaydeals" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} /> */}
        {/* <Route path="/passwordreset" element={<PrivateRoute><Passwordreset/></PrivateRoute>} /> */}
    </Routes>
  )
}

export default MainRoutes