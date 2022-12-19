import React, { useCallback, useEffect, useState } from "react";
import "./Products.css";
import {  getTodayDeals } from "../../redux/App/AppAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TodayDeals = ({ title }) => {
  const {Appreducer}=useSelector((store)=>store);
  const {products,isLoading}=Appreducer
  console.log(Appreducer);
  const dispatch=useDispatch()

  const options = {
    method: 'GET',
    url: 'https://amazon24.p.rapidapi.com/api/product',
    params: {categoryID: 'aps', keyword: 'todays deal', country: 'IN', page: '2'},
    headers: {
      'X-RapidAPI-Key': '5c29c0f5dcmsh221befa5b77990fp148730jsna14c92afa3c0',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
    }
  };

  const HandleAddToCart=(el)=>{
    const {cart}=Authreducer
    cart.push(el)
    dispatch()
  }

 
  useEffect(() => {
    dispatch(getTodayDeals(options))
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="loading">
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>
        {title}
      </h1>
      <div className="product">
        {products.length > 0 &&
          products.map((ele, index) =>
            <div key={index} className="product1">
              <div id="imgdiv"><img src={ele.product_main_image_url} alt={ele.product_title} /></div>
             
              <p>
                {ele.product_title}
              </p>
              <p>
                {ele.app_sale_price_currency} {ele.app_sale_price}
              </p>
              {/* <button className="rating" disabled>
                {ele.evaluate_rate}
              </button> */}
              <button onClick={()=> HandleAddToCart(ele)} className="cart">Add To Cart</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default TodayDeals;
