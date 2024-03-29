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
import PrivateRoute from './PrivateRoute'
import WalletPage from './WalletPage';
import OrderPlacedPage from './OrderPlaced';
import Wishlist from './Wishlist';
import Address from './Address';

function MainRoutes() {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products/search/:searchQuery" element={<Products title={"Search"}/>}/>
        <Route path="/products/new/:searchQuery" element={<Products title={"New Arrivals"}/>}/>
        <Route path="/products/best/:searchQuery" element={<Products title={"Best Selling"}/>}/>
        <Route path="/products/clearance/:searchQuery" element={<Products title={"Clearance Sale"}/>}/>
        <Route path="/products/:searchQuery" element={<Products title={"App Only"}/>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/Wishlist"                                              element={<PrivateRoute><Wishlist/></PrivateRoute>} />
        <Route path="/products/todaydeals/:searchQuery" element={<TodayDeals title={"Today's Deals"}/>} />
        <Route path="/Wallet" element={<PrivateRoute><WalletPage/></PrivateRoute>} />
        <Route path="/OrderPlaced" element={<PrivateRoute><OrderPlacedPage/></PrivateRoute>} />
        <Route path="/address" element={<PrivateRoute><Address/></PrivateRoute>} />
        {/* <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} /> 
        <Route path="/passwordreset" element={<PrivateRoute><Passwordreset/></PrivateRoute>} /> */}
        <Route path="/singleproduct:id" element={<PrivateRoute><SingleProduct/></PrivateRoute> } />
    </Routes>
  )
}

export default MainRoutes