import {Routes, Route} from 'react-router-dom'
import Homepage from "./Homepage/Homepage";
import React from 'react'
import Login from './Login'
import Signup from './Signup'
// import Payment from "./Payment"
// import Products from './Products/Products'
// import Passwordreset from './Passwordreset'
// import Cart from './Cart'
// import TodayDeals from './Products/TodayDeals';
// import PrivateRoute from './PrivateRoute'

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route path="/newproducts" element={<PrivateRoute><Products title={"New Arrivals"} searchQuery={"new items"}/></PrivateRoute>}/>
        <Route path="/bestproducts" element={<PrivateRoute><Products title={"Best Selling"} searchQuery={"best"}/></PrivateRoute>}/>
        <Route path="/clearanceproducts" element={<PrivateRoute><Products title={"Clearance Sale"} searchQuery={'Clearance sale'}/></PrivateRoute>}/>
        <Route path="/apponlyproducts" element={ <PrivateRoute><Products title={"App Only"} searchQuery={'App only'}/></PrivateRoute>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/todaydeals" element={<PrivateRoute><TodayDeals title={"Featured Outlet Deals"}/></PrivateRoute>} />
        <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} />
        <Route path="/passwordreset" element={<PrivateRoute><Passwordreset/></PrivateRoute>} /> */}
        {/* <Route path="/singleproduct" element={<SingleProduct/>} /> */}
    </Routes>
  )
}

export default MainRoutes